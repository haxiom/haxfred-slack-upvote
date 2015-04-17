var helpers = require('./helpers');

var haxfred_slack_upvote = function(haxfred) {

  haxfred.on('slack.message', '', function(data, deferred) {
    var message = data.text,
        user    = data.user,
        channel = data.channel;

        console.log(data);
    // var message = data.content,
    //     from = data.from,
    //     users = haxfred.irc.users[data.message.args[0]],
    //     regex = helpers.detectUpvoteRegex(users),
    //     person = helpers.detectUpvote(message, regex);

    // if(person && from != person) {
    //   haxfred.emit('irc.upvote',{
    //     recipient: person,
    //     sender: from
    //   });
    // }

    deferred.resolve();
  });
};

module.exports = haxfred_slack_upvote;
