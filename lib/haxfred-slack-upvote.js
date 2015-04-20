var helpers = require('./helpers');

var haxfred_slack_upvote = function(haxfred) {

  haxfred.on('slack.message', '', function(data, deferred) {
    var message = data.text,
        sender  = data.user,
        regex = /^<@(.+)>: (:\+1:|\+|\+1|:100:).*/,
        recipient = helpers.detectUpvote(message, regex);

    if(recipient && sender != recipient) {
      haxfred.emit('slack.upvote',{
        recipient: recipient,
        sender: sender
      });
    }

    deferred.resolve();
  });
};

module.exports = haxfred_slack_upvote;
