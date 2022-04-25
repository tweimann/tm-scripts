// ==UserScript==
// @name         reddit preview link fixer
// @description  will replace the reddit preview links with i.redd.it
// @author       tweimann
// @version      0.5
// @match        https://preview.redd.it/*
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function() {
    'use strict';

    const currentLocation = String(window.location);

    var formattedLocation = currentLocation.replace('preview.redd.it/', 'i.redd.it/');
    var croppedLocation = formattedLocation.slice(0, formattedLocation.indexOf('?'));
    window.open(croppedLocation, '_self');
})();