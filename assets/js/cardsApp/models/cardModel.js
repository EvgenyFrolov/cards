define([

    'underscore',
    'backbone'

], function(_, Backbone) {

    var CardModel = Backbone.Model.extend({

        defaults: {
            term: "Term",
            translation: "Default name",
            category: "Default category",
            status: true
        },

        schemaName: "Card",
        
        initialize: function() {
            this.bind("remove", function() {
                this.destroy();
            });
        }

    });

    return CardModel;

});