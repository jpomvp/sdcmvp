var containerManager = require('../../containermanager/containermanager');

var imageName = "foobar";
var testUserId = "foo";

containerManager.createContainer(imageName, testUserId);
/*containerManager.getUserContainers(testUserId, function(data) {
    console.log("Containers for user " + testUserId + ": ", data);
});
containerManager.getAllContainers(function(data) {
    console.log("All containers", data);
});*/
// Will need to change the container ID passed as an argument
//containerManager.removeContainer('581440189ef7ed4f6bcb84440186496bfd29ce2989b85f308dd6275dbcfc8503');