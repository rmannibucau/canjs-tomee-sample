$(function () {
    (function (App) {
        // model (REST client)
        App.Issue = can.Model.extend({findAll: 'api/tomee'});
    })(App);
});