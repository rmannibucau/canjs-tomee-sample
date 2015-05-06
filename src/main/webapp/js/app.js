(function () {
    require.config({
        paths: {
            'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
            'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
            'can': '//cdn.rawgit.com/bitovi/canjs.com/v2.2.5/amd/can'
        }
    });

    define([ 'can', 'controller' ], function(can, controllers) {
        var Router = can.Control({
            'issue/:id route': controllers.IssueController,
            'route': controllers.IssueListController
        });
        new Router(document);
        can.route.ready();
    });
})();