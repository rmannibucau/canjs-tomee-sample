define(['can'], function (can) {
    return {
        Issue: can.Model.extend({
            findAll: 'api/tomee',
            findById: function (params) {
                var deferred = new can.Deferred();
                var self = this;
                can.ajax({
                    type: 'GET',
                    url: 'api/tomee/' + params.id
                }).then(function (issue) {
                    deferred.resolve(self.parseModel(issue));
                }, function (xhr, textStatus, err) {
                    deferred.reject(err);
                });
                return deferred;
            }
        }, {})
    };
});