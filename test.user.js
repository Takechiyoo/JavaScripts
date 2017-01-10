// Generated by CoffeeScript 1.8.0

/* IsThereAnyDeal.com Collection Importer
// ==UserScript==
// @name IsThereAnyDeal.com Collection Importer
// @version 0.1b16
// @namespace http://isthereanydeal.com/
// @description Adds buttons to various sites to export your game lists to ITAD
// @icon http://s3-eu-west-1.amazonaws.com/itad/images/banners/50x50.gif
// @license MIT
// @supportURL https://github.com/ssokolow/itad_importer/issues
// @grant GM_info
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
//
// @match *://www.dotemu.com/*
// @match *://fireflowergames.com/my-lists/*
// @match *://flyingbundle.com/users/account
// @match *://www.flyingbundle.com/users/account
// @match *://www.gog.com/account*
// @match *://www.gog.com/order/status/*
// @match *://groupees.com/purchases*
// @match *://groupees.com/users/*
// @match *://www.humblebundle.com/home*
// @match *://www.humblebundle.com/downloads?key=*
// @match *://www.humblebundle.com/s?key=*
// @match *://indiegamestand.com/wallet.php
// @match *://indiegamestand.com/wishlist.php
// @match *://www.shinyloot.com/m/games*
// @match *://www.shinyloot.com/m/wishlist*
// ==/UserScript==

Any patches to this script should be made against the original
CoffeeScript source file available (and documented) at:

  https://github.com/ssokolow/itad_importer

Copyright ©2014-2015 Stephan Sokolow
License: MIT (http://opensource.org/licenses/MIT)

TODO:
- Add a `@downloadURL` for the script

Note: While we do not use GM_info, we must request it to force the userscript
to be isolated from the page so its jQuery doesn't collide with the site's
jQuery.
 */
