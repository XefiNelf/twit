//import utiles
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import de BD
import { Tweets } from '../bdd/tweets.js';

//Import html + js
import './tweet.html';

Template.tweet.events({
    //pour supprimer le tweet
    'click .delete'() {
        if(document.getElementById('user') != null && document.getElementById('user').innerText == Meteor.user().username){
            Tweets.remove(this._id);
        }
    },
});

Template.tweet.events({
    //va sur la page de l'user
    'click .user'(event){
        event.preventDefault();
        Session.set('page', "User");
        Session.set('user', event.target.innerText);
    }
});
