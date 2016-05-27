/**
 * Component: Intro
 */

var gd = gd || {};

gd.intro = new function(){
    var self = this;

    this.init = function(selector) {
        $('#js-intro__media').logosDistort({
            effectWeight: 0.6,
            outerBuffer: 1.08,
            elementDepth: 200,
            perspectiveMulti: 1.0,
            enableSmoothing: true
        });
    };

};
