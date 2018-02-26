const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const Url = require('../models/url')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');

});

router.get('/client', (req, res) => {
  res.send('get all clients')
  Client.find({})
    .then((clients) => {
      console.log('clients are ', clients);
      res.status(200).json(clients);
    })
    .catch((err) => {
      console.log('what is the err?')
      res.error(err);
    })
});

router.get('/client/:id', (req, res) => {
  console.log('what is req.params?', req.params)
  res.status(200).send('get route for url by id ' + req.params.id)  
});

router.post('/client/', (req, res) => {
  if (req && req.body) {
    console.log('what is req body? ', req.body);
    const newClient = Client({
      name: req.body.name,
      password: req.body.password
    })
    newClient.save( (err) => {
      if (err) {
        console.log('err ', err)
        throw err;
      }
      console.log('client created!');
      res.send('done');
    })
  }
  else {
    res.send('there was no body')
  }
});

router.post('/client/:id', (req, res) => {
  res.send('update route for client')
});

router.get('/url', (req, res) => {
  Url.find({})
    .then((urls) => {
      console.log('what are the urls? ')
      res.status(200).json(urls);
    })
    .catch((err) => {
      console.log('what is the err?')
      res.error(err);
    })
});

router.get('/url/:id', (req, res) => {
  res.status(200).send('get route for url by id ' + req.params.id)
});

router.post('/url/', (req, res) => {
  if (req && req.body) {
    console.log('what is req body? ', req.body);
    const newUrl = Url({
      clientId: req.body.clientId,
      status: req.body.status,
      priority: req.body.priority
    })
    newUrl.save( (err) => {
      if (err) {
        console.log('err ', err)
        throw err;
      }
      console.log('url created!');
      res.send('done');
    })
  }
  else {
    res.send('there was no body')
  }
});

router.post('/url/:id', (req, res) => {
  res.send('update route for url')
});

router.get('/url/create', (req, res) => {
  const url1 = Url({
    clientId: 1,
    status: 'started',
    priority: 1
  })

  const url2 = Url({
    clientId: 1,
    status: 'started',
    priority: 2
  })

  const url3 = Url({
    clientId: 1,
    status: 'finished',
    priority: 4
  })
});

module.exports = router;