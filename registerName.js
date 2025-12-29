function registerStudent(username, callback) {
    console.log("Registered student:", username);
    callback();
}
function sendWelcomeMessage(user) {
    console.log(" Welcome " + user + " ! ");
}
registerStudent("Thicien", sendWelcomeMessage);