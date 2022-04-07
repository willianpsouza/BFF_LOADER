const express = require('express')

const http = require('http')
const https = require('https')
const axios = require('axios')

const app = express()
const port = 3001

const CallBase = axios.create({
  httpsAgent: new https.Agent({ keepAlive: true }),
  httpAgent: new http.Agent({ keepAlive: true }),
  baseURL: 'http://127.0.1:3000/',
  timeout: 1000,
  headers: {
    'Accept': 'plain/text',
  }  
})

let getFacts = async () => {
    const httpAgent = new http.Agent({keepAlive : false,timeout : 100, })
    let response = await CallBase.get('/teste.json',{timeout : 100});
    //let response = await axios.get('http://127.0.1:3000/teste.json',{timeout : 100});
    return response;
};

app.get('/teste.json', (req, res) => {
    getFacts()
    .then(data => res.send(data.data))
    .catch(err => console.log(err))
})

app.get('/teste2.json', async (req, res) => {
  try {
      const facts = await getFacts()
      res.send(facts.data)
  } catch(e) {
      console.log(e)
      res.status(500).send('Something broke!');
  }
})

  var  server = app.listen(port, () => {
    console.log(`Running Wild  ${port}`)
  })

  server.on('connection',function(socket) {
    socket.setKeepAlive(false);
    socket.setTimeout(600);
  });
