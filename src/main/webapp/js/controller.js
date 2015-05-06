define([
    'can', 'jquery',
    'model',
    'text!../partial/issue.mustache',
    'text!../partial/issues.mustache'
], function (can, $, model) {
    return {
        IssueListController: function () {
            model.Issue.findAll({}, function (issues) {
                can.view(
                    '../partial/issues.mustache',
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
        },
        IssueController: function (params) {
            model.Issue.findById(params)
                .then(function (issue) {
                    can.view(
                        '../partial/issue.mustache',
                        issue,
                        function (html) {
                            $('#content').html(html);
                        })
                });
        }
    };
});