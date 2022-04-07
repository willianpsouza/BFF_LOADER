
/*A ideia eh um front que se conecte a um outro servico http

cliente (vegeta) --> frontend (bff) --> backend (responde)

Basicamente 2 modos:

1 com keepalive, menor overhead de conexao.
1 sem keepalive, maior overhead de conexao.

Ambos sofrem com altencia e randomicidade de respostas porem sem keepalive a diferenca
e notavel.*/

const express = require('express')
const http = require('http')
const https = require('https')
const axios = require('axios')

const app = express()
const port = 3001

// CONFIGURACAO DO KEEPALIVE
const CallBase = axios.create({
  httpsAgent: new https.Agent({ keepAlive: true }),
  httpAgent: new http.Agent({ keepAlive: true }),
  baseURL: 'http://127.0.1:3000/',
  timeout: 1000,
  headers: {
    'Accept': 'plain/text',
  }  
})

//UTILIZANDO KEEP ALIVE
let getFacts = async (v) => {
  if(v == 1 ){
    const httpAgent = new http.Agent({keepAlive : false,timeout : 100, })
    let response = await CallBase.get('/sdados.json',{timeout : 100});
    return response;
  }
  if(v == 2 ){
    const httpAgent = new http.Agent({keepAlive : false,timeout : 100, })
    let response = await CallBase.get('/rdados.json',{timeout : 100});
    return response;
  }

  //CHAMADAS SEM KEEPALIVE
  if( v == 3 ){
    let response = await axios.get('http://127.0.1:3000/sdados.json',{timeout : 100});
    return response;
  }
  if( v == 4 ){
    let response = await axios.get('http://127.0.1:3000/rdados.json',{timeout : 100});
    return response;
  }
};

//UTILIZANDO O KEEP ALIVE
app.get('/teste.json', async (req, res) => {
  try {
    const facts = await getFacts(1)
    res.send(facts.data)
  } catch(e) {
      console.log(e)
      res.status(500).send('Something broke!');
  }  
})

//UTILIZANDO O KEEP ALIVE
app.get('/teste2.json', async (req, res) => {
  try {
    const facts = await getFacts(2)
    res.send(facts.data)
  } catch(e) {
      console.log(e)
      res.status(500).send('Something broke!');
  }  
})

//SEM KEEP ALIVE
app.get('/teste3.json', async (req, res) => {
  try {
      const facts = await getFacts(3)
      res.send(facts.data)
  } catch(e) {
      console.log(e)
      res.status(500).send('Something broke!');
  }
})

//SEM KEEP ALIVE
app.get('/teste4.json', async (req, res) => {
  try {
      const facts = await getFacts(4)
      res.send(facts.data)
  } catch(e) {
      console.log(e)
      res.status(500).send('Something broke!');
  }
})
  var  server = app.listen(port, () => {
    console.log(`Running http server:  ${port}`)
  })

// server.on('connection',function(socket) {
//   socket.setKeepAlive(True);
//   socket.setTimeout(600);
// });
