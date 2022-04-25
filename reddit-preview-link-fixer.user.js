// ==UserScript==
// @name         reddit preview link fixer
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  will replace the reddit preview links with i.redd.it
// @author       tweimann
// @match        https://preview.redd.it/*
// @icon         https://www.google.com/s2/favicons?domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const currentLocation = String(window.location);

    var formattedLocation = currentLocation.replace('preview.redd.it/', 'i.redd.it/');
    var croppedLocation = formattedLocation.slice(0, formattedLocation.indexOf('?'));
    window.open(croppedLocation, '_self');
    console.log('link fixed!')
}());