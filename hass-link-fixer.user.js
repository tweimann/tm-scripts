// ==UserScript==
// @name         hass link fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  will replace the hass https links with http
// @author       tweimann
// @match        https://10.99.20.104*
// @icon         https://www.google.com/s2/favicons?domain=home-assistant.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const currentLocation = String(window.location);
    window.open(currentLocation.replace('https://', 'http://'), '_self');
    console.log('link fixed!')
}());