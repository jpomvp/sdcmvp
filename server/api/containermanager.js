'use strict';
const AuthPlugin = require('../auth');
const Boom = require('boom');
const Joi = require('joi');
const ContainerManager = require('../../containermanager/containermanager');


const internals = {};


internals.applyRoutes = function (server, next) {

    server.route({
        method: 'PUT',
        path: '/startcontainer/{imageName}',
        config: {
            auth: {
                strategy: 'session',
            },
        },
        handler: function (request, reply) {
            ContainerManager.createContainer(request.params.imageName, request.auth.credentials.user._id, function(err, result) {
                if (err) reply({"message" : "Unable to create container" + err});
                else reply({"message" : "Container is running"});
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/getcontainers',
        config: {
            auth: {
                strategy: 'session',
            },
        },
        handler: function (request, reply) {
            ContainerManager.getUserContainers(request.auth.credentials.user._id, function(data) {
                reply(data);
            });
        }
    });

    server.route({
        method: 'DELETE',
        path: '/removecontainer/{containerId}',
        config: {
            auth: {
                strategy: 'session',
            },
        },
        handler: function (request, reply) {
            ContainerManager.removeContainer(request.params.containerId, function(err, result) {
                if (err) reply({"message" : "Unable to remove container"});
                else reply({"message" : "Container removed"});
            });
        }
    });

    next();
};

exports.register = function (server, options, next) {

    server.dependency(['auth', 'hapi-mongo-models'], internals.applyRoutes);

    next();
};


exports.register.attributes = {
    name: 'containermanager'
};
