module.exports = {
  detectUpvote: function(message, regex) {
    var users = message.match(regex);
    return users ? users[1] : false;
  }
};
