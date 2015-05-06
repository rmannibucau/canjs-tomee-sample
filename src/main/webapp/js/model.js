$(function () {
    (function (App) {
        // model (REST client)
        App.Issue = can.Model.extend({
            findAll: 'api/tomee',
            findById: function (params) {
                var deferred = new can.Deferred();
                can.ajax({
                    type: 'GET',
                    url: 'api/tomee/' + params.id
                }).then(function (issue) {
                    deferred.resolve(App.Issue.parseModel(issue));
                }, function(xhr, textStatus, err) {
                    deferred.reject(err);
                });
                return deferred;
            }
        }, {});
    })(App);
});