//import utiles
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import de BD
import { Tweets } from '../bdd/tweets.js';

//Import html
import './home.html';

Template.home.helpers({
    //return tout les tweet classé en ordre croissant et mettre la date comme on veut
    tweets: function() {
        return Tweets.find({}, { sort: { createdAt: -1 }, transform: function(doc){
            doc.createdAt = doc.createdAt.getDate() + "/" + parseInt(doc.createdAt.getMonth() + 1) + "/" + doc.createdAt.getFullYear();
            return doc;
        } });
    },
});
