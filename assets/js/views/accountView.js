define([
    'jquery',
    'underscore',
    'backbone',
    'models/userModel',
    'models/appModel',
    'text!templates/accountTemplate.html'

], function ( $, _, Backbone, UserModel, AppModel, accountTemplate ) {
    
    var  AccountView = Backbone.View.extend({
   
        tagName: 'div',
        template: accountTemplate,
        events: {

        },

        initialize: function(options) {
            this.options=options;
        },

        render: function() {
            var appModel = new AppModel();
            var tmpl = _.template(this.template);
            var userModel = new cardsApp.UserModel(appModel.get("loggedUser"));
            this.$el.append(tmpl( { "userModel": userModel } ));
            return this;
        }
    });

    return AccountView;

});
