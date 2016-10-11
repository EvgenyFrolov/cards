define([
    'jquery',
    'underscore',
    'backbone',
    'models/appModel',
    'views/mainView',
    'views/cardsTableView',
    'views/learningView',
    'views/accountView'


], function ( $, _, Backbone, AppModel, MainView, CardsTableView, LearningView, AccountView) {

    var Router = Backbone.Router.extend({
        routes: {
            "": "openMain",
            "cardsTable": "openCardsTable",
            "learning": "openLearning",
            "account": "openAccount"

            // "edit/:index": "editToDo",
            // "delete/:index": "delteToDo"
        }
    });

     var initialize = function () {

        var router = new Router();

        router.on('route:openMain', function () {
            $('.main-container').html('');

            var appModel = new AppModel();

            var mainView = new MainView({
            model: appModel,
            el: $('.main-container')
            });
            mainView.render();
        });

        router.on('route:openCardsTable', function() {
            $('.main-container').html('');

            var mainSection = new CardsTableView({
                el: $('.main-container')
            });
        });

        router.on('route:openLearning', function() {
            $('.main-container').html('');

            var mainSection = new LearningView({
                el: $('.main-container')
            });
        });

        router.on('route:openAccount', function() {
            $('.main-container').html('');

            var mainSection = new AccountView({
                el: $('.main-container')
            });
        });

        Backbone.history.start(); 
    };

    return { 
        initialize: initialize
    };
});