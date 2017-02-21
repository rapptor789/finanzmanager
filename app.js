var restify = require('restify');
var builder = require('botbuilder');
var userOptions = require('./userOptions.js')

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

bot.dialog('/', [
    function (session) {
        builder.Prompts.choice(session, "Wähle eine Option was passieren soll ;-):", userOptions, {listStyle: builder.ListStyle['button']}); 
    },
    function (session, results) {
        if (results.response) {  
            var userChoice = userOptions["Girokonto Minus"][results.response.entity];
            session.send(userChoice + "We sold %(units)d units for a total of %(total)s.", userChoice); 

        } else {
            session.send("ok");
        }
    }
]);