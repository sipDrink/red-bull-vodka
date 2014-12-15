// Mailer, used to send emails (services/mailer.js)
// ------------------------------------------------

var mailer = require('nodemailer');
var sender = mailer.createTransplant('SMTP', {
  service: 'Gmail',
  auth: {
    user: 'gmail.willscottmoss@gmail.com',
    pass: 'ballin35'
  }
});

var options = {
  from: 'Sip red-bull-vodka'
};

function Mailer(transport) {
  this.sender = transport || sender;
  this.options = options;
}

Mailer.prototype.send = function(options) {
  var future = $q.defer();

  _.merge(options, this.options);

  this.sender.sendMail(options, function(error){
    error ? future.reject(error) : future.resolve();
  });

  return future.promise;
};


module.exports = Mailer;
