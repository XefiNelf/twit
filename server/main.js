import { Meteor } from 'meteor/meteor';
import '../imports/bdd/tweets.js';

Meteor.startup(() => {
  process.env.MONGO_URL = 'mongodb://admin:pommes@cluster0-shard-00-00.4ouy5.mongodb.net:27017,cluster0-shard-00-01.4ouy5.mongodb.net:27017,cluster0-shard-00-02.4ouy5.mongodb.net:27017/tester?ssl=true&replicaSet=atlas-12vcjh-shard-0&authSource=admin&retryWrites=true&w=majority'
  console.log('Connection url => ', process.env.MONGO_URL);
  // code to run on server at startup
});
