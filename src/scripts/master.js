/*!

Google Dart - Website 2016
____ ____ __ _ ____  __ ____ _  _
(  _ (  __(  ( (  __)/ _(_  _/ )( \
) _ () _)/    /) _)/    \)( ) __ (
(____(____\_)__(____\_/\_(__)\_)(_/

Proud authors:         www.beneath.dk
People behind:         Lars Hesselberg, @hesselberg


!*/

/**
 * Initialize main objects
 */
var gds = gds || {};

/**
 * DOM loaded, fire javascript
 */
document.addEventListener("DOMContentLoaded", function(event) {
    $('#js-intro__media').logosDistort({
        effectWeight: 0.6
    });
});
