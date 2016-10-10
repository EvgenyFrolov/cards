define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/accountTemplate',
    'text!templates/cardsTableTemplate',
    'text!templates/learningTemplate'

], function ( $, _, Backbone, accountTemplate, cardsTableTemplate, learningTemplate ) {

        var Router = Backbone.Router.extend({
        routes: {
            "": "openMain",
            "cardsTable": "openCardsTable",
            "learning": "openLearning",
            "account": "openAccount"

            // "edit/:index": "editToDo",
            // "delete/:index": "delteToDo"
        },
        'openCardsTable': function() {
            $('.main-container').html('');

            var mainSection = new CardsTableView({
                el: $('.main-container')
            });
        },

        'openLearning': function() {
            $('.main-container').html('');

            var mainSection = new LearningView({
                el: $('.main-container')
            });
        },

        'openAccount': function() {
            $('.main-container').html('');

            var mainSection = new AccountView({
                el: $('.main-container')
            });
        }

    });

    var router = new Router();

    Backbone.history.start();

    return router;

});