(function() {
    'use strict';
    debugger;
    var root = this;

    var Chart = function() {
        console.log('I am a chart');
    };

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Chart;
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = Chart;
    }

    root.Chart = Chart;

    Chart.noConflict = function() {
        root.Chart = previous;
        return Chart;
    };

}).call(this);
