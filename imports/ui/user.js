//import utiles
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import de BD
import { Tweets } from '../bdd/tweets.js';

//Import html + js
import './user.html';


Template.User.helpers({

    //retourne l'utilisateur
    user: function(){
        return Session.get('user');
    },

    //retourne les tweet de l'utilisateur
    tweets: function() {
        return Tweets.find({ username: {$eq: Session.get('user') }}, { sort: { createdAt: -1 }, transform: function(doc){
            doc.createdAt = doc.createdAt.getDate() + "/" + parseInt(doc.createdAt.getMonth() + 1) + "/" + doc.createdAt.getFullYear();
            return doc;
        } });
    },

    //return si l'utilisateur courant est celui de la variable session
    isUser: function(){
        return Session.get('user') == Meteor.user().username;
    }
});

Template.User.events({
    //on retourne sur la page home
    'click .home'(event){
        event.preventDefault();
        Session.set('page', 'home');
    },
    //envoyer un nouveau tweet en appuyant sur la touche entrée
    'submit #new-tweet'(event) {
        event.preventDefault();

        //on récupère les informations nécessaires
        var form = new FormData(document.getElementById("new-tweet"));
        //on récupère le name tweet du formulaire
        var new_text = form.get("tweet");
        //on crée une variable avec la date du jour
        var date = new Date();

        //si le text n'est pas vide
        if(new_text != ""){
            Tweets.insert({
                text: new_text,
                createdAt: date,
                owner: Meteor.userId(),
                username: Meteor.user().username,
            });
            //on remet le formulaire à vide
            document.getElementById('form').value = '';
        }
    },
    //envoie d'un tweet avec le bouton submit
    'click #submit-tweet'(event){
        event.preventDefault();
        //on récupère les informations nécessaires
        var form = new FormData(document.getElementById("new-tweet"));
        //on récupère le name tweet du formulaire
        var new_text = form.get("tweet");

        //si text n'est pas nul on crée un nouveau tweet
        if(new_text != ""){
            Tweets.insert({
                text: new_text,
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username,
            });
            // Clear form
            document.getElementById('form').value = '';
        }
    },
});
