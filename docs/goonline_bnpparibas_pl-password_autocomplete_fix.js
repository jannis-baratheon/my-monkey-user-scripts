// ==UserScript==
// @name         BNP Paribas GoOnline password autocomplete fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change type of password field to "password"
// @author       You
// @match        https://goonline.bnpparibas.pl/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    new MutationObserver(function(mutations) {
        var passwordField = document.querySelector('[data-test-id="password-input"]');

        if (!passwordField) {
            return;
        }

        passwordField.type = 'password';
        this.disconnect();
    }).observe(document, {childList: true, subtree: true});
})();