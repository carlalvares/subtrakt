// // Inject the payload.js script into the current tab after the popout has loaded
// window.addEventListener('load', function (evt) {
// 	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
// 		file: 'payload.js'});;},
// {url: [{urlMatches : 'https://www.spotify.com/[a-z|-]*/account/subscription/'}]});
//
// // Listen to messages from the payload.js script and write to popout.html
// chrome.runtime.onMessage.addListener(function (message) {
//   const x = message.search("a");
//   const y = message.substring(x, x+30);
// 	document.getElementById('pagetitle').innerHTML = y;
// });
