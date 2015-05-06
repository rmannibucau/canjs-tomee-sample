$(function () {
    (function (App) {
        App.IssueListController = function () {
            App.Issue.findAll({}, function (issues) {
                can.view(
                    'partial/issues.mustache',
                    new can.Map({
                        issues: new can.List(issues),
                        filterIssues: function (element) {
                            var value = element.val();
                            this.issues.forEach(function (issue) {
                                var hide = !!value && issue.title.indexOf(value) < 0;
                                if (hide != issue.hide) {
                                    issue.attr('display', hide ? 'none' : 'list-item');
                                }
                            });
                        }
                    }),
                    function (html) {
                        $('#content').html(html);
                    });
            });
        };
    })(App);
});