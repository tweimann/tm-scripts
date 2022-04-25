// ==UserScript==
// @name         reddit preview link fixer
// @namespace    http://tampermonkey.net/
// @description  will replace the reddit preview links with i.redd.it
// @author       tweimann
// @version      0.5
// @icon         https://www.google.com/s2/favicons?domain=reddit.com
// @match        https://preview.redd.it/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const currentLocation = String(window.location);

    var formattedLocation = currentLocation.replace('preview.redd.it/', 'i.redd.it/');
    var croppedLocation = formattedLocation.slice(0, formattedLocation.indexOf('?'));
    window.open(croppedLocation, '_self');
}());