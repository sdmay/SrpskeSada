import * as express from 'express';
import 'isomorphic-fetch';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import Cat from './models/cat';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  router.get('/sportsarticles', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=rs&category=sports&apiKey=8cf1462c364045dbaba45990cfd5534d
    `).then(response => response.json()
  .then(data => {
    console.log(data);
    res.send(data);
  }));

  });
  router.get('/businessarticles', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=rs&category=business&apiKey=8cf1462c364045dbaba45990cfd5534d
    `).then(response => response.json()
  .then(data => {
    console.log(data);
    res.send(data);
  }));

  });
  router.get('/entertainmentarticles', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=rs&category=entertainment&apiKey=8cf1462c364045dbaba45990cfd5534d
    `).then(response => response.json()
  .then(data => {
    console.log(data);
    res.send(data);
  }));

  });

  router.get('/healtharticles', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=rs&category=health&apiKey=8cf1462c364045dbaba45990cfd5534d
    `).then(response => response.json()
  .then(data => {
    console.log(data);
    res.send(data);
  }));

  });
  router.get('/techarticles', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=rs&category=technology&apiKey=8cf1462c364045dbaba45990cfd5534d
    `).then(response => response.json()
  .then(data => {
    console.log(data);
    res.send(data);
  }));

  });
  router.get('/sciencearticles', (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=rs&category=science&apiKey=8cf1462c364045dbaba45990cfd5534d
    `).then(response => response.json()
  .then(data => {
    console.log(data);
    res.send(data);
  }));

  });


  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
