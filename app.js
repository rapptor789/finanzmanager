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
var validUserNames = new Array('max','moritz','hana');

bot.dialog('/', [
    function(session) {
        session.beginDialog('auth');
    },
    function(session, results) {
        session.send("Hallo");
        session.beginDialog('main');
    }
]);

bot.dialog('auth', [
    function(session) {
        builder.Prompts.text(session, "Hallo, hier ist der Finanzmanager. Bitte loggen Sie sich ein (Max, Moritz, Hana)");
    },
    function(session, results) {
        if (validUserNames.indexOf(results.response.toLowerCase()) != -1) {
            session.send("Hallo %s", results.response);
            session.userData.name = results.response;
            session.endDialog();
        }
        else{
          session.send("Username ungültig. (Max, Moritz, Hana)");
          session.replaceDialog('auth');
        }
    }
]);

bot.dialog('main', [
    function(session) {
        var currentTreePosition = userOptions.userOptions;
        var lastElement = "Welches Szenario?";
        level.forEach(function(element) {
            currentTreePosition = currentTreePosition[element]['values'];
            lastElement = element;
        }, this);
        if (level.length > 0) {
            currentTreePosition["Zurück"] = {};
        }
        builder.Prompts.choice(session, lastElement, currentTreePosition, {
            listStyle: builder.ListStyle['button']
        });
    },
    function(session, results) {

        if (results && results.response) {
            if (results.response.entity == "Zurück") {
                level.pop();
            } else {
                level.push(results.response.entity);
            }
        }
        session.replaceDialog('main');
    }
]);