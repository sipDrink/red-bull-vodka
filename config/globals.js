//    Globals (config/globals.js)
// ------------------------------
// Here is where we set up most of our global stuff
// Why do we want global stuff? There will be static modules that we use
// everywhere in this server, why keep requiring them in each file.
// **global** is the `window` of `node`. We also read the `api/` folder
// and create channels for `PubNub` based off what resources are in that
// folder.

var fs = require('fs');

// **colors** used for logging, takes over `String.prototype`
require('colors');

// **String.prototype.capitalize** used to cap first letter of a string
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// **_** `lodash` module
global._ = require('lodash');
// **$q** `Q` module
global.$q = require('q');
// **$config** the config object initialized in `index.js`
global.$config = require('./env');
// **$log** basic abstraction from `console.log()`, can be turned on or off by **$config.logging**
global.$log = $config.logging ? console.log : function(){};
// **$handleError** global error handler function
global.$handleError = function(error, meta) {
  console.log(error, meta);
};

// **$channels** this is an `array ` of channel names that will be used with `PubNub`
// `fs.readdirSync` will return an array of all folders or file names in the `api/` directory
// must filter out the files, we only want the resource folders that have `models` and
// `actions`
global.$channels = _.remove(fs.readdirSync(__dirname + '/../api'), function(file) {
  return !/.js/g.test(file);
});

// logging all the channels on bootup
$log('--- Channels ---'.bold.cyan);
_.forEach($channels, function(channel) {
  var message = '  ** ' + channel + ' **';
  $log(message.underline.green);
});
$log('----------------'.bold.cyan);

// **addModelsToGlobal** this function uses `$channels` to add the
// corresponding model to the global. For example, the `users` channel
// will allow use to bind the `User` model to global. We can now
// use any `mongoose` model anywhere in this server without having to require it.
// It a channel ends in an "ies" then change it to end in a "y". We need this because
// when we try to require the models here, they are all singular, for ex:
// the `categories` channel has a `category` model.
var addModelsToGlobal = function addModelsToGlobal(){
  _.forEach($channels, function(channel) {
    var directory = channel;

    if (/ies\b/g.test(channel)) {
      channel = channel.replace(/ies\b/g, 'y');
    }

    if (channel[channel.length - 1] === 's') {
      channel = channel.slice(0, channel.length - 1);
    }

    var pathToModel = '../api/' + directory + '/' + channel + 'Model';
    channel = channel.capitalize();
    global[channel] = require(pathToModel);

  });
};

addModelsToGlobal();
