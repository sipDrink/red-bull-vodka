'use strict';

var Bar = require('../api/bars/barModel');

var bars = [
  {
    name: 'The Grand',
    type: 'night club',
    drinks: [],
    completedSignUp: true,
    password: 'skjf8340932ubash2%^&#(*',
    email: 'thegrand@grand.com',
    loc: [38.8076974,
    -123.2558549],
    address: {
      street: '1234 grand road',
      extra: '',
      city: 'oakland',
      state: 'ca',
      zip: '94610'
    }
  },

  {
    name: 'Belagio',
    type: 'night club',
    drinks: [

    ],
    completedSignUp: true,
    password: 'skjf8340932ubash2%^&#(*',
    email: 'belagio@belagio.com',
    loc: [38.8076974,
    -123.2558549],
    address: {
      street: '1234 something st',
      extra: 'suite 222',
      city: 'oakland',
      state: 'ca',
      zip: '94610'
    }
  },

  {
    name: 'Tempest',
    type: 'pub',
    drinks: [],
    completedSignUp: true,
    password: 'skjf8340932ubash2%^&#(*',
    email: 'tempest@tempest.com',
    loc: [38.8076974,
    -123.2558549],
    address: {
      street: '1234 something st',
      extra: 'suite 222',
      city: 'oakland',
      state: 'ca',
      zip: '94610'
    }
  },

  {
    name: 'The Monarch',
    type: 'dive bar',
    drinks: [
    ],
    completedSignUp: true,
    password: 'skjf8340932ubash2%^&#(*',
    email: 'Monarch@tmonarch.com',
    loc: [
      42.755942,
    -75.8092041
    ],
    address: {
      street: '1234 something st',
      extra: 'suite 222',
      city: 'oakland',
      state: 'ca',
      zip: '94610'
    }
  },

  {
    name: 'The league',
    type: 'sports bar',
    drinks: [
    ],
    completedSignUp: true,
    password: 'skjf8340932ubash2%^&#(*',
    email: 'league@league.com',
    loc: [
      42.755942,
    -75.8092041
    ],
    address: {
      street: '1234 something st',
      extra: 'suite 222',
      city: 'oakland',
      state: 'ca',
      zip: '94610'
    }
  },

  {
    name: 'Deviant',
    type: 'night club',
    drinks: [
    ],
    completedSignUp: true,
    password: 'skjf8340932ubash2%^&#(*',
    email: 'deviant@deviant.com',
    loc: [
      42.755942,
    -75.8092041
    ],
    address: {
      street: '1234 something st',
      extra: 'suite 222',
      city: 'oakland',
      state: 'ca',
      zip: '94610'
    }
  },

  {
    name: 'Mr. Smit\'s',
    type: 'pub',
    drinks: [],
    completedSignUp: true,
    password: 'skjf8340932ubash2%^&#(*',
    email: 'smith@smith.com',
    loc: [
      42.755942,
    -75.8092041
    ],
    address: {
      street: '1234 something st',
      extra: 'suite 222',
      city: 'oakland',
      state: 'ca',
      zip: '94610'
    }
  },

  {
    name: 'The Outlet',
    type: 'dive bar',
    drinks: [],
    completedSignUp: true,
    password: 'skjf8340932ubash2%^&#(*',
    email: 'outlet@outlet.com',
    loc: [
      42.755942,
    -75.8092041
    ],
    address: {
      street: '1234 something st',
      extra: 'suite 222',
      city: 'oakland',
      state: 'ca',
      zip: '94610'
    }
  }
];

var drinks = [
  {
    name: 'Grey Goose',
    category: 'shots',
    ingredients: [],
    price: 12
  },
  {
    name: 'Fire Ball',
    category: 'shots',
    ingredients: [],
    price: 6
  },
  {
    name: 'Bloody Marry',
    category: 'mixed drinks',
    ingredients: [],
    price: 9
  },
  {
    name: 'Super Man',
    category: 'mixed drinks',
    ingredients: [],
    price: 9
  },
  {
    name: 'Red Bull Vodka',
    category: 'mixed drinks',
    ingredients: [
      'red bull',
      'vodka'
    ],
    price: 9
  },
  {
    name: 'Bay Breeze',
    category: 'mixed drinks',
    ingredients: [],
    price: 7
  },
  {
    name: 'Bud Light',
    category: 'beers',
    ingredients: [],
    price: 6
  },
  {
    name: 'Dark and Stormy',
    category: 'mixed drinks',
    ingredients: [],
    price: 12
  },
  {
    name: 'Gin & Tonic',
    category: 'mixed drinks',
    ingredients: [
    ],
    price: 9
  },
  {
    name: 'Screw Driver',
    category: 'mixed drinks',
    ingredients: [
    ],
    price: 11
  },
  {
    name: 'White Russian',
    category: 'mixed drinks',
    ingredients: [
    ],
    price: 6
  },
  {
    name: 'Coors Light',
    category: 'beers',
    ingredients: [
    ],
    price: 6
  },
  {
    name: 'Muscato',
    category: 'wine',
    ingredients: [
    ],
    price: 9
  },
  {
    name: 'Vouvray',
    category: 'wine & champagne',
    ingredients: [
    ],
    price: 15
  },
  {
    name: 'Sake',
    category: 'other',
    ingredients: [
    ],
    price: 8
  },

];

var create = $q.nbind(Bar.create, Bar);

Bar.find().remove(function(err) {
  if (err) {
    $log('error deleted previous seed');
    return;
  };

  _.forEach(bars, function(bar) {
    bar.drinks = drinks;
  });

  create(bars).then(function(bars) {
    $log('DB seeded with [' + bars.length + '] bars');
  })
  .fail(function(err) {
    $log('error seeding DB', err);
  });

});
