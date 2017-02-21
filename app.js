var restify = require('restify');
var builder = require('botbuilder');
var userOptions = require('./userOptions');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: "", // process.env.MICROSOFT_APP_ID,
    appPassword: "" // process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

var level = [];

bot.dialog('/', [
    function(session) {
        session.send("Moin");
        session.beginDialog('main');
    }/*,
    function(session, results) {
        if (results.response) {
            var region = salesData[results.response.entity];
            session.send("We sold %(units)d units for a total of %(total)s.", region);
        } else {
            session.send("ok");
        }
    }*/
]);

bot.dialog('main', [
    function(session) {
        var currentTreePosition = userOptions.userOptions;
        var lastElement = "Welches Szenario?";
        level.forEach(function(element) {
            console.log(element);
            currentTreePosition = currentTreePosition[element];
            lastElement = element;
        }, this);
        console.log(currentTreePosition);

        builder.Prompts.choice(session, "lastElement", currentTreePosition, {
            listStyle: builder.ListStyle['button']
        });
    },
    function (session, results) {
        if (results && results.response) {
            console.log(results.response.entity);
            level.push(results.response.entity);
            session.send("Du hast: " + results.response.entity + " gewählt!");
        }
        session.replaceDialog('main');
    }
]);
