document.addEventListener('DOMContentLoaded', function (evt)
 {

 	//if (localStorage["spotifydat"] == null) {

	var tbinput;
	var tbinput2;

	tbinput = document.getElementById("tbinput");
	tbinput2 = document.getElementById("tbinput2");
	document.getElementById("btadd").addEventListener('click', addDate);
	document.getElementById("btadd2").addEventListener('click', addPrice);

	document.getElementById('dat').innerHTML = localStorage["spotifydat"];
	document.getElementById('prc').innerHTML = localStorage["spotifyprc"];

});

 	function addDate() {
	  localStorage["spotifydat"] = tbinput.value; // add textbox value to array
	  tbinput.value = ''; // clear textbox value
	};

	function addPrice() {
	  localStorage["spotifyprc"] = tbinput2.value; // add textbox value to array
	  tbinput2.value = ''; // clear textbox value
	};
