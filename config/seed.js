'use strict';
var colors = require('colors');

var bars = [
  {
    "name": "Earthplex",
    "barType": "Sports Bar",
    "email": "Earthplex0@Earthplex.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "aliquip",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Eldert Lane",
      "city": "Cleary"
    },
    "phone": "(998) 555-2844",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Orbaxter",
    "barType": "Pub",
    "email": "Orbaxter1@Orbaxter.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "duis",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Ridge Court",
      "city": "Retsof"
    },
    "phone": "(813) 524-3980",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Mobildata",
    "barType": "Night Club",
    "email": "Mobildata2@Mobildata.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "id",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Manor Court",
      "city": "Belmont"
    },
    "phone": "(891) 519-2774",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Genesynk",
    "barType": "Lounge",
    "email": "Genesynk3@Genesynk.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "velit",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Cobek Court",
      "city": "Kieler"
    },
    "phone": "(924) 496-2230",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Isis",
    "barType": "Sports Bar",
    "email": "Isis4@Isis.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "commodo",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Roosevelt Court",
      "city": "Goochland"
    },
    "phone": "(991) 453-2904",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Bleeko",
    "barType": "Night Club",
    "email": "Bleeko5@Bleeko.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "nostrud",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Polar Street",
      "city": "Gorst"
    },
    "phone": "(929) 488-3365",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Norsup",
    "barType": "Night Club",
    "email": "Norsup6@Norsup.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "laboris",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Osborn Street",
      "city": "Dixonville"
    },
    "phone": "(946) 578-3796",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Fossiel",
    "barType": "Lounge",
    "email": "Fossiel7@Fossiel.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "do",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Holt Court",
      "city": "Advance"
    },
    "phone": "(940) 447-2672",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Ecosys",
    "barType": "Lounge",
    "email": "Ecosys8@Ecosys.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "nulla",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Lorraine Street",
      "city": "Hasty"
    },
    "phone": "(957) 468-2251",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Strozen",
    "barType": "Lounge",
    "email": "Strozen9@Strozen.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "culpa",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Surf Avenue",
      "city": "Concho"
    },
    "phone": "(871) 542-2740",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Pawnagra",
    "barType": "Lounge",
    "email": "Pawnagra10@Pawnagra.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "laborum",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Newton Street",
      "city": "Dola"
    },
    "phone": "(964) 563-3712",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Corpulse",
    "barType": "Sports Bar",
    "email": "Corpulse11@Corpulse.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "exercitation",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Ferry Place",
      "city": "Bluffview"
    },
    "phone": "(888) 556-2286",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Digifad",
    "barType": "Sports Bar",
    "email": "Digifad12@Digifad.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "sint",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Albee Square",
      "city": "Leming"
    },
    "phone": "(957) 416-3002",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Qimonk",
    "barType": "Sports Bar",
    "email": "Qimonk13@Qimonk.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "aute",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Nevins Street",
      "city": "Westwood"
    },
    "phone": "(987) 476-2845",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Paprikut",
    "barType": "Pub",
    "email": "Paprikut14@Paprikut.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "irure",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Bogart Street",
      "city": "Frierson"
    },
    "phone": "(826) 435-3752",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Venoflex",
    "barType": "Sports Bar",
    "email": "Venoflex15@Venoflex.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "eiusmod",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Cypress Court",
      "city": "Valle"
    },
    "phone": "(813) 533-3898",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Zilencio",
    "barType": "Night Club",
    "email": "Zilencio16@Zilencio.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "aliquip",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Ovington Avenue",
      "city": "Disautel"
    },
    "phone": "(857) 502-2846",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Netbook",
    "barType": "Sports Bar",
    "email": "Netbook17@Netbook.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "sunt",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Congress Street",
      "city": "Garfield"
    },
    "phone": "(978) 529-3287",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Coriander",
    "barType": "Night Club",
    "email": "Coriander18@Coriander.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "do",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Suydam Place",
      "city": "Ventress"
    },
    "phone": "(915) 427-2868",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Zolarity",
    "barType": "Pub",
    "email": "Zolarity19@Zolarity.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "nulla",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Hastings Street",
      "city": "Farmington"
    },
    "phone": "(892) 433-2771",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Applidec",
    "barType": "Sports Bar",
    "email": "Applidec20@Applidec.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "dolor",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Hooper Street",
      "city": "Eagleville"
    },
    "phone": "(861) 567-3464",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Slofast",
    "barType": "Sports Bar",
    "email": "Slofast21@Slofast.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "laborum",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Vernon Avenue",
      "city": "Greer"
    },
    "phone": "(917) 454-3383",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Manglo",
    "barType": "Sports Bar",
    "email": "Manglo22@Manglo.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "nulla",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Vandervoort Place",
      "city": "Columbus"
    },
    "phone": "(863) 538-3277",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Syntac",
    "barType": "Night Club",
    "email": "Syntac23@Syntac.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "duis",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Emerson Place",
      "city": "Rodanthe"
    },
    "phone": "(957) 571-2465",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Zanity",
    "barType": "Night Club",
    "email": "Zanity24@Zanity.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "qui",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Landis Court",
      "city": "Clinton"
    },
    "phone": "(884) 471-3887",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Tubalum",
    "barType": "Sports Bar",
    "email": "Tubalum25@Tubalum.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "sunt",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Folsom Place",
      "city": "Mooresburg"
    },
    "phone": "(930) 538-3808",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Utarian",
    "barType": "Lounge",
    "email": "Utarian26@Utarian.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "fugiat",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Navy Walk",
      "city": "Leeper"
    },
    "phone": "(801) 442-3352",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Eweville",
    "barType": "Lounge",
    "email": "Eweville27@Eweville.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "cupidatat",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Strickland Avenue",
      "city": "Belvoir"
    },
    "phone": "(962) 428-3418",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Callflex",
    "barType": "Pub",
    "email": "Callflex28@Callflex.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "culpa",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Blake Avenue",
      "city": "Ryderwood"
    },
    "phone": "(909) 483-3753",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Isologia",
    "barType": "Pub",
    "email": "Isologia29@Isologia.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "cupidatat",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Gallatin Place",
      "city": "Carlton"
    },
    "phone": "(964) 475-2155",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Incubus",
    "barType": "Sports Bar",
    "email": "Incubus30@Incubus.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "aute",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Grove Street",
      "city": "Rivereno"
    },
    "phone": "(859) 491-3820",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Scenty",
    "barType": "Sports Bar",
    "email": "Scenty31@Scenty.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "ullamco",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Tennis Court",
      "city": "Hamilton"
    },
    "phone": "(882) 431-2291",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Lotron",
    "barType": "Lounge",
    "email": "Lotron32@Lotron.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "veniam",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Albany Avenue",
      "city": "Ribera"
    },
    "phone": "(897) 448-2972",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Anarco",
    "barType": "Lounge",
    "email": "Anarco33@Anarco.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "veniam",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Empire Boulevard",
      "city": "Swartzville"
    },
    "phone": "(813) 504-3405",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Yurture",
    "barType": "Pub",
    "email": "Yurture34@Yurture.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "laborum",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Judge Street",
      "city": "Lisco"
    },
    "phone": "(805) 451-3449",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Retrack",
    "barType": "Lounge",
    "email": "Retrack35@Retrack.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "dolor",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Kent Street",
      "city": "Cotopaxi"
    },
    "phone": "(865) 468-3999",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Zensus",
    "barType": "Lounge",
    "email": "Zensus36@Zensus.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "mollit",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Dare Court",
      "city": "Woodburn"
    },
    "phone": "(854) 542-3517",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Medalert",
    "barType": "Lounge",
    "email": "Medalert37@Medalert.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "nulla",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Noll Street",
      "city": "Westboro"
    },
    "phone": "(931) 455-2197",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Avenetro",
    "barType": "Sports Bar",
    "email": "Avenetro38@Avenetro.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "cupidatat",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Russell Street",
      "city": "Snowville"
    },
    "phone": "(836) 478-2578",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Assistia",
    "barType": "Night Club",
    "email": "Assistia39@Assistia.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "deserunt",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Fane Court",
      "city": "Forbestown"
    },
    "phone": "(948) 434-3699",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Jumpstack",
    "barType": "Lounge",
    "email": "Jumpstack40@Jumpstack.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "ea",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Railroad Avenue",
      "city": "Strong"
    },
    "phone": "(958) 529-2667",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Zentia",
    "barType": "Pub",
    "email": "Zentia41@Zentia.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "in",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Anna Court",
      "city": "Sandston"
    },
    "phone": "(951) 533-2782",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Mixers",
    "barType": "Sports Bar",
    "email": "Mixers42@Mixers.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "duis",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Bowne Street",
      "city": "Outlook"
    },
    "phone": "(988) 486-3604",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Snorus",
    "barType": "Pub",
    "email": "Snorus43@Snorus.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "velit",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Louisiana Avenue",
      "city": "Buxton"
    },
    "phone": "(930) 505-2311",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Handshake",
    "barType": "Night Club",
    "email": "Handshake44@Handshake.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "adipisicing",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Henry Street",
      "city": "Bend"
    },
    "phone": "(922) 420-2137",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Maineland",
    "barType": "Pub",
    "email": "Maineland45@Maineland.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "elit",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Troutman Street",
      "city": "Cutter"
    },
    "phone": "(877) 492-2961",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Zolavo",
    "barType": "Sports Bar",
    "email": "Zolavo46@Zolavo.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "adipisicing",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Morgan Avenue",
      "city": "Santel"
    },
    "phone": "(981) 514-3577",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Evidends",
    "barType": "Night Club",
    "email": "Evidends47@Evidends.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "fugiat",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Foster Avenue",
      "city": "Wanamie"
    },
    "phone": "(860) 546-3331",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Pasturia",
    "barType": "Sports Bar",
    "email": "Pasturia48@Pasturia.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "qui",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Kensington Walk",
      "city": "Volta"
    },
    "phone": "(998) 438-2451",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Exoswitch",
    "barType": "Pub",
    "email": "Exoswitch49@Exoswitch.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "cupidatat",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Quincy Street",
      "city": "Delshire"
    },
    "phone": "(813) 537-2362",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Qot",
    "barType": "Night Club",
    "email": "Qot50@Qot.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "occaecat",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Schenectady Avenue",
      "city": "Aguila"
    },
    "phone": "(911) 465-3660",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Billmed",
    "barType": "Pub",
    "email": "Billmed51@Billmed.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "duis",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Stratford Road",
      "city": "Courtland"
    },
    "phone": "(999) 571-3034",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Uxmox",
    "barType": "Sports Bar",
    "email": "Uxmox52@Uxmox.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "exercitation",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Barlow Drive",
      "city": "Blende"
    },
    "phone": "(944) 560-3582",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Entogrok",
    "barType": "Lounge",
    "email": "Entogrok53@Entogrok.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "tempor",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Irwin Street",
      "city": "Wikieup"
    },
    "phone": "(803) 572-3766",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Vidto",
    "barType": "Sports Bar",
    "email": "Vidto54@Vidto.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "ea",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Gunnison Court",
      "city": "Driftwood"
    },
    "phone": "(989) 565-3788",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Pearlesex",
    "barType": "Pub",
    "email": "Pearlesex55@Pearlesex.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "in",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Garden Place",
      "city": "Winfred"
    },
    "phone": "(878) 538-3887",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Reversus",
    "barType": "Lounge",
    "email": "Reversus56@Reversus.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "culpa",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Llama Court",
      "city": "Coral"
    },
    "phone": "(942) 567-2194",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Dentrex",
    "barType": "Lounge",
    "email": "Dentrex57@Dentrex.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "in",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Autumn Avenue",
      "city": "Gibsonia"
    },
    "phone": "(820) 583-3693",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Maroptic",
    "barType": "Sports Bar",
    "email": "Maroptic58@Maroptic.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "voluptate",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Rutledge Street",
      "city": "Hannasville"
    },
    "phone": "(993) 561-2616",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Inear",
    "barType": "Night Club",
    "email": "Inear59@Inear.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "proident",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Irving Avenue",
      "city": "Cedarville"
    },
    "phone": "(873) 470-3742",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Lyrichord",
    "barType": "Lounge",
    "email": "Lyrichord60@Lyrichord.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "voluptate",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Berkeley Place",
      "city": "Linwood"
    },
    "phone": "(975) 446-2191",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Jasper",
    "barType": "Lounge",
    "email": "Jasper61@Jasper.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "labore",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Hull Street",
      "city": "Ellerslie"
    },
    "phone": "(959) 570-3787",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Bristo",
    "barType": "Sports Bar",
    "email": "Bristo62@Bristo.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "commodo",
    "completedSignUp": false,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Girard Street",
      "city": "Leroy"
    },
    "phone": "(853) 423-3360",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  },
  {
    "name": "Dancity",
    "barType": "Night Club",
    "email": "Dancity63@Dancity.com",
    "drinkMixers": [
      {
        "name": "Cola"
      },
      {
        "name": "Orange Juice"
      },
      {
        "name": "Cranberry Juice"
      },
      {
        "name": "Red Bull",
        "price": 8
      },
      {
        "name": "Sugar Free Red Bull",
        "price": 7
      }
    ],
    "password": "nulla",
    "completedSignUp": true,
    "loc": [
      20.8457111,
      102.230921
    ],
    "address": {
      "street": "Cranberry Street",
      "city": "Bellfountain"
    },
    "phone": "(881) 506-2621",
    "drinks": [
      {
        "name": "Red Bull Vodka",
        "price": 12,
        "ingredients": [
          "Redbull",
          "Vodka"
        ]
      },
      {
        "name": "Long Island Iced Tea",
        "price": 14,
        "ingredients": [
          "vodka",
          "rum",
          "tequila",
          "tea"
        ]
      }
    ]
  }
];

var bartenders = [
  {name: "Sara", password: '9238gui83483', username: 'Sjk123'},
  {name: "Johnny", password: '9238gui83483', username: 'Jon John'},
  {name: "Vivian", password: '9238gui83483', username: 'Viv'},
];

var drinkTypes = [
  {
    name: "Vodka",
    brands: [
      {
        name: "Ciroc",
        price: 15
      },
      {
        name: 'Grey Goose',
        price: 14
      }
    ]
  },
  {
    name: "Beer",
    brands: [
      {
        name: "Budwiser",
        price: 6
      },
      {
        name: "Dos Equis",
        price: 7
      },
      {
        name: "Laguna",
        price: 8
      }
    ]
  },
  {
    name: "Whiskey",
    brands: [
      {
        name: "Jack Daniels",
        price: 11
      },
      {
        name: "Wild Turkey",
        price: 8
      }
    ]
  },
  {
    name: "Bourbon",
    brands: [
      {
        name: "Jim Bean",
        price: 14
      },
      {
        name: "Evan Williams",
        price: 16
      }
    ]
  }
];

var createBar = $q.nbind(Bar.create, Bar);
var createDrinkType = $q.nbind(DrinkType.create, DrinkType);
var createBarTender = $q.nbind(Bartender.create, Bartender);


var remove = function(model) {
  var future = $q.defer();
  model.find().remove(function(err) {
    err ? future.reject(err) : future.resolve();
  });
  return future.promise;
};

var save = function(doc) {
  var future = $q.defer();
  doc.save(function(err){
    err ? future.reject(err) : future.resolve();
  });
  return future.promise;
};

var start = new Date().getTime();
var getTime = function(){
  return new Date().getTime() - start + ' ms';
};

remove(Bar)
  .then(function() {
    return remove(DrinkType);
  })
  .then(function() {
    return remove(Bartender);
  })
  .then(function() {
    // $log(  getTime() + ' Creating bars');
    return createBar(bars);
  })
  .then(function(bars) {
    // $log(  getTime() + ' Creating bartenders');

    var bartenderCreations = _.map(bars, function(bar) {
      var Lbartenders = _.map(bartenders, function(bartender) {
        bartender.bar = bar._id;
        return bartender;
      });
      return createBarTender(Lbartenders);
    });

    return $q.all(bartenderCreations)
      .then(function(bartenders) {
        return {
          bars: bars,
          tenders: bartenders
        };
      });
  })
  .then(function(data) {
    // $log(  getTime() + ' Creating drinkTypes');

    var drinkTypeCreations = _.map(data.bars, function(bar) {
      var LDrinkTypes = _.map(drinkTypes, function(drinkType) {
        drinkType.bar = bar._id;
        $log(drinkType.bar);
        return drinkType;
      });
      return createDrinkType(LDrinkTypes);
    });

    return $q.all(drinkTypeCreations)
      .then(function(drinkTypes) {
        data.drinkTypes = drinkTypes;
        return data;
      });

  })
  .then(function(results) {
    var bars = results.bars;
    var drinks = results.drinkTypes;
    var bartenders = results.tenders;
    var updatedBars = _.map(bars, function(bar, index) {
      var id = bar._id;
      var _drinks = _.filter(drinks[index], { bar: id });
      var _bartenders = _.filter(bartenders[index], { bar: id });

      _.forEach(_drinks, function(drink){
        bar.drinkTypes.push(drink._id);
      });

      _.forEach(_bartenders, function(bartender) {
        bar.bartenders.push(bartender._id);
      });

      bar.markModified('bartenders');
      bar.markModified('drinkTypes');
      return save(bar);
    });

    return $q.all(updatedBars);
  })
  .then(function(bars){
    $log(bars[0]);
    var seedMessage = 'Seeded DB with ' + bars.length + ' Bars'.bold.cyan;
    var timeMessage = 'Execution time ' + getTime().bold.underline.green;

    $log(seedMessage);
    $log(timeMessage);
  })
  .fail(function(err) {
    $log('Error in seed', err);
  });
