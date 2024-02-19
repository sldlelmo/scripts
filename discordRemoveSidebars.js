// ==UserScript==
// @name        Discord Remove Sidebars
// @namespace   Violentmonkey Scripts
// @match       https://discord.com/channels/@me/*
// @grant       none
// @version     1.0
// @author      sldlelmo
// @description Removes The Discord Sidebars
// ==/UserScript==

function waitScript() {
  setTimeout(deleteStuff, 5000)
}

function deleteStuff() {
  document.querySelector('[class^=\'sidebar\']').style.width = "0px";
  document.querySelector('[class^=\'wrapper\']').style.width = "0px";
  waitScript()
}

function window.addEventListener( 'load', () => {
  waitScript()
})