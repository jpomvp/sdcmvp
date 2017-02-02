var docker = require('docker-remote-api');
var fs = require('fs-extra');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

const collectionName = "containers"

var request = docker({ host: process.env.DOCKER_HOST || 'http://192.168.99.100:2376' });
var url = process.env.MONGODB_URI || "mongodb://192.168.99.100:32768/aqua";

module.exports = {
    createContainer: function (imageName, userId, callback) {

        var body = { "Image": imageName }
        // Create the container
        request.post('/v1.25/containers/create', { 'json': body }, function (err, data) {
            if (err) {
                callback(err, null);
                return;
            }
            console.log("Created container: ", data);

            // Start the container
            request.post('/v1.25/containers/' + data.Id + "/start", {'json': {}}, callback);

            // Save the container and associated user to the db
            MongoClient.connect(url, function (err, db) {
                assert.equal(null, err);
                var document = { "user": userId, "container": data.Id, "image" : imageName };
                insertContainer(db, document, function (err, results) {
                    if (err) throw err;
                    console.log("result", results);
                    db.close();
                });
            });
        });
    },

    getUserContainers : function(user, callback) {
         MongoClient.connect(url, function (err, db) {
                assert.equal(null, err);
                var query = {"user" : user};
                fetchContainers(db, query, function(err, data) {
                    if (err) throw err;
                    callback(data);
                    db.close();
                });
         });
    },

    getAllContainers : function(callback) {
         MongoClient.connect(url, function (err, db) {
                assert.equal(null, err);
                fetchContainers(db, {}, function(err, data) {
                    if (err) throw err;
                    callback(data);
                    db.close();
                });
         });
    },

    removeContainer : function(containerId, callback) {
        request.delete("/v1.25/containers/" + containerId + "?force=true", [], function(err, result) {
            if (err) {
                callback(err, null);
                return;
            }
            console.log("Removed container " + containerId, result);
            callback(null, result);
            // Remove the container from the db
            MongoClient.connect(url, function (err, db) {
                assert.equal(null, err);
                removeContainer(db, containerId, function(err, data) {
                    if (err) throw err;
                    console.log("DB Entry removed", data);
                    db.close();
                });
            });
        });
    }
}

// Save the containerId and associated user to MongoDB
var insertContainer = function (db, document, callback) {
    var collection = db.collection(collectionName);
    collection.insertOne(document, callback);
}

var fetchContainers = function(db, query, callback) {
    var collection = db.collection(collectionName);
    collection.find(query).toArray(callback);
}

// Remove a container from the db
var removeContainer = function(db, containerId, callback) {
    var collection = db.collection(collectionName);
    collection.deleteOne({'container' : containerId}, callback);
}