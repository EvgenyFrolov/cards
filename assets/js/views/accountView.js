define([
    'jquery',
    'underscore',
    'backbone',
    'models/userModel',
    'text!templates/accountTemplate.html'

], function ( $, _, Backbone, UserModel, accountTemplate ) {
    
    var  AccountView = Backbone.View.extend({

        tagName: 'div',
        el: $("#accountTemplate"),
        

        initialize: function() {
            this.model = new UserModel();
            this.render();
        },

        render: function() {

            var templateData = {
                user: this.model.toJSON()
            };

            var compiledTemplate = _.template( accountTemplate, templateData );

            this.$el.html( compiledTemplate );
            return this;
        }
    });

    return AccountView;

});
