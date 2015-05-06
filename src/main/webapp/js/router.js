$(function () {
    (function (App) {
        var Router = can.Control({
            'issue/:id route': App.IssueController,
            'route': App.IssueListController
        });

        // run the app
        new Router(document);
        can.route.ready();
    })(App);
});