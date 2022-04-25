// ==UserScript==
// @name         reddit preview link fixer
// @namespace    http://tampermonkey.net/
// @description  will replace the reddit preview links with i.redd.it
// @author       tweimann
// @version      0.5
// @source       https://raw.githubusercontent.com/tweimann/tm-scripts/main/reddit-preview-link-fixer.js
// @downloadURL  https://raw.githubusercontent.com/tweimann/tm-scripts/main/reddit-preview-link-fixer.js
// @updateURL    https://raw.githubusercontent.com/tweimann/tm-scripts/main/reddit-preview-link-fixer.js
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