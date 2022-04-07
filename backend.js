
const express = require('express')
const app = express()
const port = 3000

data = [
    {
      "_id": "624dfd1f0c72fe90c028334e",
      "index": 0,
      "guid": "0debe14b-68d8-494a-92f3-3308d7739f71",
      "isActive": true,
      "balance": "$2,663.29",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "blue",
      "name": "Riggs Hurst",
      "gender": "male",
      "company": "PROWASTE",
      "email": "riggshurst@prowaste.com",
      "phone": "+1 (841) 584-2921",
      "address": "718 Clinton Avenue, Irwin, Maryland, 3551",
      "about": "Aute consectetur dolore esse aute elit sunt incididunt nisi officia enim. Non reprehenderit duis velit enim aliqua proident ut sint dolore esse consectetur consequat do voluptate. Labore quis veniam dolor Lorem. Commodo laboris laboris sit magna Lorem eu cillum fugiat ex id incididunt aliquip nisi incididunt.\r\n",
      "registered": "2018-11-03T04:50:32 +03:00",
      "latitude": -6.265654,
      "longitude": -146.173484,
      "tags": [
        "laborum",
        "consequat",
        "ea",
        "elit",
        "adipisicing",
        "id",
        "exercitation"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Booker Jackson"
        },
        {
          "id": 1,
          "name": "Tanya Alexander"
        },
        {
          "id": 2,
          "name": "Morrow Herrera"
        }
      ],
      "greeting": "Hello, Riggs Hurst! You have 10 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "624dfd1f389f002e4bb29d18",
      "index": 1,
      "guid": "e47c647e-ff25-4434-a41b-3389a60c2f03",
      "isActive": false,
      "balance": "$3,248.07",
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "eyeColor": "green",
      "name": "Malone Mann",
      "gender": "male",
      "company": "DIGINETIC",
      "email": "malonemann@diginetic.com",
      "phone": "+1 (884) 426-3979",
      "address": "130 Butler Place, Sterling, West Virginia, 3347",
      "about": "Amet nisi voluptate voluptate officia. Proident ex in est culpa voluptate culpa dolor. Excepteur labore labore do reprehenderit exercitation.\r\n",
      "registered": "2021-10-20T02:38:51 +03:00",
      "latitude": 18.288054,
      "longitude": -158.988932,
      "tags": [
        "eu",
        "non",
        "pariatur",
        "commodo",
        "sint",
        "ea",
        "ullamco"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Mallory Chavez"
        },
        {
          "id": 1,
          "name": "Shields Casey"
        },
        {
          "id": 2,
          "name": "Elnora Warren"
        }
      ],
      "greeting": "Hello, Malone Mann! You have 8 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "624dfd1fbde3045b7eeb87b0",
      "index": 2,
      "guid": "808ccfec-5322-4673-8a7c-20d59f59fd32",
      "isActive": false,
      "balance": "$2,627.07",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "green",
      "name": "Willis Levine",
      "gender": "male",
      "company": "PUSHCART",
      "email": "willislevine@pushcart.com",
      "phone": "+1 (865) 473-2042",
      "address": "132 Crosby Avenue, Charco, Wyoming, 6959",
      "about": "Ullamco qui occaecat sint incididunt tempor adipisicing. Nisi ex culpa mollit occaecat cillum ut consectetur consequat aliquip tempor amet aliquip laborum dolore. Ut excepteur aute fugiat duis sit incididunt irure tempor tempor culpa veniam sunt sit. Do ea ullamco Lorem laborum commodo aliqua aliquip. Velit veniam incididunt deserunt reprehenderit commodo cupidatat cillum minim aliquip. Quis reprehenderit exercitation enim sint cillum in adipisicing fugiat dolore est voluptate nulla ex nisi. Et ex aliquip sunt pariatur.\r\n",
      "registered": "2018-01-26T09:25:28 +02:00",
      "latitude": -52.10868,
      "longitude": 90.128254,
      "tags": [
        "laborum",
        "ea",
        "sint",
        "elit",
        "sunt",
        "Lorem",
        "velit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Chasity Raymond"
        },
        {
          "id": 1,
          "name": "Hobbs Golden"
        },
        {
          "id": 2,
          "name": "Atkinson Carpenter"
        }
      ],
      "greeting": "Hello, Willis Levine! You have 1 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "624dfd1f31554cb40d324390",
      "index": 3,
      "guid": "2c6ff8d1-b5ac-4ef7-b751-4bcd5a2e302b",
      "isActive": false,
      "balance": "$3,233.76",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "green",
      "name": "Isabelle Hendricks",
      "gender": "female",
      "company": "ZANITY",
      "email": "isabellehendricks@zanity.com",
      "phone": "+1 (877) 524-2405",
      "address": "396 Tabor Court, Martinez, Virgin Islands, 1759",
      "about": "Velit non culpa nulla laboris occaecat laborum veniam ullamco sunt dolore id sit. Ex officia in eiusmod exercitation eiusmod. Laborum pariatur adipisicing in velit enim mollit culpa Lorem voluptate.\r\n",
      "registered": "2018-03-02T12:33:07 +03:00",
      "latitude": 68.315641,
      "longitude": -68.693898,
      "tags": [
        "et",
        "elit",
        "ex",
        "esse",
        "ipsum",
        "minim",
        "enim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Deana Stark"
        },
        {
          "id": 1,
          "name": "Brooke Wiggins"
        },
        {
          "id": 2,
          "name": "Chrystal Boyer"
        }
      ],
      "greeting": "Hello, Isabelle Hendricks! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "624dfd1fd672e4c21c8c49a5",
      "index": 4,
      "guid": "345c323c-9dab-424d-aeda-879164964cde",
      "isActive": false,
      "balance": "$3,771.86",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "brown",
      "name": "Gilmore Sloan",
      "gender": "male",
      "company": "COMTRAK",
      "email": "gilmoresloan@comtrak.com",
      "phone": "+1 (980) 446-3339",
      "address": "487 Conover Street, Tryon, Montana, 5581",
      "about": "Consequat voluptate cillum sunt id aliqua Lorem aute sint do labore laborum Lorem do. Quis cillum consequat pariatur dolore sint cupidatat adipisicing elit magna. Laborum aliqua exercitation nulla sit deserunt. Commodo nisi fugiat commodo tempor labore. Lorem amet cillum elit enim Lorem aute.\r\n",
      "registered": "2015-09-18T03:33:22 +03:00",
      "latitude": -35.516388,
      "longitude": 106.484629,
      "tags": [
        "proident",
        "exercitation",
        "sit",
        "tempor",
        "voluptate",
        "proident",
        "nulla"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Doris Melton"
        },
        {
          "id": 1,
          "name": "Carroll Moreno"
        },
        {
          "id": 2,
          "name": "Angeline Ballard"
        }
      ],
      "greeting": "Hello, Gilmore Sloan! You have 4 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ]

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.get('/teste.json', (req, res) => {
  var c = Math.floor(Math.random() * 150);
  console.log(c)

  if(c > 90){
    sleep(c);
    
    
  }
  res.send(data)
  
})

app.listen(port, () => {
  console.log("running wild ! ")
})