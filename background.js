chrome.webNavigation.onCompleted.addListener(function() {
  chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
    file: 'payload.js'});
}, {url: [{urlMatches : 'https://www.spotify.com/[a-z|-]*/account/subscription/'}]});

chrome.runtime.onMessage.addListener(function (message) {
  const pattern = 'subscription-status[^/]*</p>';
  const x = message.match(pattern);
  //const y = message.substring(x, x + 150);
  alert(x);
});
