'use strict';

var balanced = require('balanced-official').configure($config.secrets.balanced.apiSecret);

function Payment(provider, name){
  this.provider = provider;
  this.provider.NAME = name;
}
// Will tokenize the card on the front end and send token here
// creating a card on the server is not recommended for
// PCI compliant stuff. Save the token with the user in
// the DB here for future use
Payment.prototype.createCard = function(values) {

};

// Used to create customer with payment provider
Payment.prototype.createUser = function(values) {

};

// Debit the card here
Payment.prototype.chargeCard = function(values) {
  if (!values) {
    return;
  }

  var cardToken;

  if(_.isObjcet(values)){
    cardToken = values.card;
  }

  this.provider.get(cardToken).debit({
    "appears_on_statement_as": "Sip @ " + values.barName,
    "amount": values.amount,
    "description": "Order from " + values.barName
  });
};

Payment.prototype.createOrder = function(merch, values){
  var order = this.provider.get('/customers/' + merch).orders.create(values);
  $log("ORDER", JSON.stringify(order));
  return order;
};

// **$Payment** added to global
global.$Payment = new Payment(balanced);

