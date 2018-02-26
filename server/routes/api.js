const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const Url = require('../models/url')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/client', (req, res) => {
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

// router.get('/client/fetch/:id', (req, res) => {
//   console.log('what is req.params?', req.params)
//   res.status(200).send('get route for url by id ' + req.params.id)  
// });

router.post('/client/new', (req, res) => {
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

// router.post('/client/edit/:id', (req, res) => {
//   res.send('update route for client')
// });

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

// router.get('/url/fetch/:id', (req, res) => {
//   res.status(200).send('get route for url by id ' + req.params.id)
// });

router.post('/url/new', (req, res) => {
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

// router.post('/url/edit/:id', (req, res) => {
//   res.send('update route for url')
// });

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

  const urls = [url1, url2, url3];

  Url.collection.insert(urls)
    .then( (newUrls) => {
      console.log('what is the urls inserted ', newUrls)
      res.status(200).json(newUrls);
    })
});

router.get('/client/create', (req, res) => {
  const client1 = Client({
    name: 'mark',
    password: 'mark'
  })

  const client2 = Client({
    name: 'marco',
    password: 'marco'
  })

  const client3 = Client({
    name: 'marek',
    password: 'marek'
  })

  const clients = [client1, client2, client3]

  Client.collection.insert(clients)
    .then( (newClients) => {
      console.log('what is the clients inserted ', newClients)
      res.status(200).json(newClients);
    })
  
})

module.exports = router;