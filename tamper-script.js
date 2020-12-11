// ==UserScript==
// @name         Twitter Confuser
// @namespace    http://jordan.matelsky.com
// @version      0.1
// @description  Make twitter worse
// @author       You
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

const STYLEMOD = `

<style>

.twitter-confuser::before {
    border-left: 2px solid rgb(47, 51, 54) !important;
    height: 89%;
    width: 0;
    content: "D";
    position: fixed;
    margin-left: 1.5em;
    margin-top: 4.5em;
    margin-bottom: -6em;
}

.twitter-confuser-nobottom {
    border-bottom: none !important;
}

</style>

`;

(function() {
    'use strict';

    let reAddConfusion = () => {

        console.log("Nice timeline, sure would be a shame if something were to happen to it...");



        document.querySelectorAll("article").forEach(tweet => {
            if (Math.random() > 0.7) {
                tweet.classList.add("twitter-confuser");
            }

            tweet.parentElement.parentElement.classList.add("twitter-confuser-nobottom");
        });
        window.setTimeout(reAddConfusion, 10000);
    };

    window.setTimeout(() => {
    document.body.innerHTML = STYLEMOD + document.body.innerHTML;

    }, 5000);

    window.setTimeout(reAddConfusion, 5000);




})();
