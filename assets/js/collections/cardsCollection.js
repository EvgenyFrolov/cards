define([

    'jquery',
    'underscore',
    'backbone',
    'models/cardModel'

], function($, _, Backbone, CardModel)  {


    var CardsCollection = Backbone.Collection.extend({

    	model: CardModel,

        initialize: function(models, options){

        },
        // use fetch() - for getting all cards

        filterByCategory: function(categoryName){
            var filtered = this.filter( function (card) {
                return card.get("category") === categoryName;
            });
            return new cardsApp.CardsCollection(filtered);
        },

        getCategories: function(){
            var categories = [];
            this.each(function(model, index) {
                var category = model.get("category");
                if($.inArray(category, categories) == -1){
                    categories.push(category);
                }
            });
            return categories;
        }

    });
});