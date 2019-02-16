chrome.webNavigation.onCompleted.addListener(function() {
    alert("spotify subscription");
}, {url: [{urlMatches : 'https://www.spotify.com/us/account/subscription/*'}]});
chrome.webNavigation.onCompleted.addListener(function() {
    alert("netflix subscription");
}, {url: [{urlMatches : 'https://www.netflix.com/BillingActivity'}]});
