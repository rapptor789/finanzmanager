var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
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

var salesData = {
    "Kleinkredit aufnehmen": {
        units: 200,
        total: "$6,000"
    },
    "Von Tagesgeldkonto Geld tranferieren": {
        units: 100,
        total: "$3,000"
    },
    "Alles OK nichts tun": {
        units: 300,
        total: "$9,000"
    }
};

bot.dialog('/', [
    function (session) {
        builder.Prompts.choice(session, "Dein Girokonto ist im Minus... Wir haben folgende Optionen für Dich ermittelt:", salesData, {listStyle: builder.ListStyle['button']}); 
    },
    function (session, results) {
        if (results.response) {
            var region = salesData[results.response.entity];
            session.send("We sold %(units)d units for a total of %(total)s.", region); 
        } else {
            session.send("ok");
        }
    }
]);