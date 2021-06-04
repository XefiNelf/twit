//import utiles
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import de BD
import { Tweets } from '../bdd/tweets.js';

//Import html + js
import './tweet.js';
import './body.html';
import './home.js';
import './user.js';

//variable de session
Session.set('page', 'home');
Session.set('user', "");

Template.body.helpers({
    //template dynamique
    currentPage: function(page){
            return Session.get('page')
    }
});

Template.body.events({
    //change de page sur l'utilisateur qui a crée le tweet
    'click .tweet'(event){
        event.preventDefault();
        Session.set('user', Meteor.user().username);
        Session.set('page', "User");
    },
});
