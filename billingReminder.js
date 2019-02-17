setTimeout(function() {
  const today = new Date();

  const spotifyBillingDate = new Date("February 19, 2019");
  const netflixBillingDate = new Date(localStorage["netflixdat"]);

  if (today.getDate() == (spotifyBillingDate.getDate() - 1)) {
    alert("Your Spotify bill is due tomorrow!");
  }

  if today.getDate() == (netflixBillingDate.getDate() - 1)) {
    alert("Your Netflix bill is due tomorrow!");
  }
}, 86400000)
