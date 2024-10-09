// ==UserScript==
// @name         Modify YouTube URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Modifies YouTube URLs by adding "-" after "t" in "youtube"
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Modify the URL when the page starts loading
    if (window.location.href.includes("youtube.com")) {
        let newURL = window.location.href.replace(/youtube\.com/g, "yout-ube.com");
        if (newURL !== window.location.href) {
            window.location.href = newURL;
        }
    }
})();
