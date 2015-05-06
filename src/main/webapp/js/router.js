$(function () {
    (function (App) {
        var Router = can.Control({
            'route': App.IssueListController
        });

        // run the app
        new Router(document);
        can.route.ready();
    })(App);
});