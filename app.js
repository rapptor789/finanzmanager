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
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

var level = [];
var validUserNames = new Array('max', 'moritz', 'hana');

bot.dialog('/', [
    function(session) {
        session.beginDialog('auth');
    },
    function(session, results) {
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
        } else {
            session.send("Username ungültig. (Max, Moritz, Hana)");
            session.replaceDialog('auth');
        }
    }
]);

bot.dialog('main', [
    function(session) {
        var currentTreePosition = userOptions.userOptions;
        var lastElement = "Welches Szenario?";
        session.userData.lastType = "options";
        level.forEach(function(element) {
            session.userData.lastType = currentTreePosition[element]['type'];
            currentTreePosition = currentTreePosition[element]['values'];
            lastElement = element;
        }, this);
        if (session.userData.lastType == "flow") {
            Object.keys(currentTreePosition).forEach(function(element) {
                level.push(element);
                session.userData.lastType = currentTreePosition[element]['type'];
                currentTreePosition = currentTreePosition[element]['values'];
                lastElement = element;
            });


            /*session.userData.lastType = currentTreePosition['type'];
            currentTreePosition = currentTreePosition['values'];
            lastElement = Object.keys(lastElement);*/
        }
        if (session.userData.lastType == "end") {
            session.send("Vielen Dank für die Nutzung des Finanzmanagers. Ihr Auftrag wurde ausgeführt.")
            level = [];
            session.endDialog();
        }
        if (session.userData.lastType == "options" && level.length > 0) {
            currentTreePosition["Zurück"] = {};
        }
        if (session.userData.lastType == 'options') {
            builder.Prompts.choice(session, lastElement, currentTreePosition, {
                listStyle: builder.ListStyle['button']
            });
        } else if (session.userData.lastType == 'number') {
            builder.Prompts.number(session, lastElement);
        }
    },
    function(session, results) {

        if (results && results.response) {
            // options
            if (results.response.entity) {
                if (results.response.entity == "Zurück") {
                    level.pop();
                } else {
                    level.push(results.response.entity);
                }
            } else if (results.response) {
                session.userData.requestedValue = results.response;
            }

        }
        console.log(session.userData.lastType);
        if (level.length > 0 && (session.userData.lastType == "end" || session.userData.lastType == "number")) {
            session.send("Vielen Dank für die Nutzung des Finanzmanagers. Ihr Auftrag wurde ausgeführt.")
            level = [];
            session.endDialog();
        } else {
            session.replaceDialog('main');
        }

    }
]);
2
