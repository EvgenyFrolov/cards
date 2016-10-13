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
            "": "showMain",
            "cardsTable": "showCardsTable",
            "learning": "showLearning",
            "account": "showAccount"

            // "edit/:index": "editToDo",
            // "delete/:index": "delteToDo"
        },
        initialize: function(el) {
            this.el = el;
            this.showMain();

        },
        currentView: null,
        switchView: function(view) {
            if (this.currentView) {
                // Detach the old view
                this.currentView.remove();
            }

            // Move the view element into the DOM (replacing the old content)
            this.el.html(view.el);

            // Render view after it is in the DOM (styles are applied)
            view.render();

            this.currentView = view;
        },
        'showMain': function(){
            var mainView = new  MainView();
            this.switchView(mainView);
        },
        showCardsTable: function(){
            var that = this;
            var categories = new  CategoriesCollection();
            categories.fetchCategory().done(function(){
                var cardsTableView = new  CardsTableView({"categories":categories });
                that.switchView(cardsTableView);
                removeBlocker();

                if(appModel.get("loggedUser")===""){
                    $(".navbar-nav.logged-header").hide();
                    $(".navbar-nav.not-logged-header").show();
                }
                else {
                    $(".navbar-nav.logged-header").show();
                    $(".navbar-nav.not-logged-header").hide();
                }
            });
        },
        showLearning: function(){
            var that = this;
            var categories = new  CategoriesCollection();
            categories.fetchCategory().done(function(){
                var learningView = new  LearningView({ "categories":categories });
                that.switchView(learningView);
            });
        },
        showAccount: function(){
            var accountView = new  AccountView();
            this.switchView(accountView);
        }
    });

    return new Router($('.main-container') );
});