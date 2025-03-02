// ==UserScript==
// @name binki-mailchimp-viewport-fix
// @homepageURL https://github.com/binki/binki-mailchimp-viewport-fix
// @version 1.0.1
// @match https://mailchi.mp/*
// @match https://*.campaign-archive.com/*
// ==/UserScript==

const metaViewport = document.querySelector('meta[name=viewport]');
metaViewport.content = metaViewport.content.split(/, */g).filter(kvp => {
  return [
    'width',
    'initial-scale',
  ].indexOf(kvp.split('=')[0]) !== -1;
});
