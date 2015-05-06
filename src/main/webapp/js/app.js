(function () {
    'use strict';

    require.config({
        paths: {
            'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
            'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
        }
    });

    define([ 'can', 'controller' ], function(can, controller) {
        var Router = can.Control({
            'issue/:id route': controller.IssueController,
            'route': controller.IssueListController
        });
        new Router(document);
        can.route.ready();
    });
})();