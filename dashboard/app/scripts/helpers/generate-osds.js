/*global define */
define(['backbone', '../collections/application-collection'], function(Backbone, Collection) {
    'use strict';
    var generateOsds = function(count) {
            var c = new Collection();
            var d1, d2, d3;
            for (var i = 0; i < count; ++i) {
                d1 = Math.floor(Math.max((15 * Math.random()) + 1), 15);
                d2 = Math.floor(Math.max((15 * Math.random()) + 1), 15);
                d3 = Math.floor(Math.max((15 * Math.random()) + 1), 15);
                c.add({
                    name: 'osd.' + i,
                    index: i,
                    used: Math.floor(Math.max(768 * Math.random()) + 1, 1024),
                    uuid: '0D5BB8' + d1.toString(16) + d2.toString(16) + '-6161-48D4-' + d3.toString(16) + '160-9863A3F016D0',
                    up: true
                });
            }
            return c;
        };
    return {
        osds: generateOsds
    };
});