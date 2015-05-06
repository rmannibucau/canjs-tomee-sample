$(function () {
    'use strict';

    var Issue = can.Model.extend({ findAll: 'api/tomee' });

    can.view('partial/issues.mustache', {issues:Issue.findAll()})
        .then(function (data) {
            $('#content').html(data);
        });
});