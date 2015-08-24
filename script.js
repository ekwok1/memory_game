window.onload = function() {
	shuffleLib();
	addListeners();
};



// ADD LISTENRS WITH LOGIC

function addListeners(){
	var img = document.querySelectorAll("img");

	_.each(img, function(element, index){
		element.addEventListener("click", function(){
			this.classList.add("picked");
			if (getCardsPicked().length < 3) {
				this.src = shufImageLib[index];
			}
			if (getCardsPicked().length === 2) {
				window.setTimeout(function(){cardCompare();}, 1000);
			}
		});
	});
}

function getCardsPicked(){
	return document.querySelectorAll(".picked");
}



// CARD COMPARE

function cardCompare(){
	var cardsPicked = document.querySelectorAll(".picked");
		if (cardsPicked[0].src === cardsPicked[1].src) {
			for (i=0; i<cardsPicked.length; i++) {
				cardsPicked[i].classList.remove("picked");
			}
		} else {
			for (i=0; i<cardsPicked.length; i++) {
				cardsPicked[i].src = "images/nba_logo.jpg";
				cardsPicked[i].classList.remove("picked");
			}
		}
		cardsPicked = [];
}

// SHUFFLE METHOD

function shuffleLib(){
	shufImageLib = _.shuffle(imageLib);
}

// GLOBAL VARIABLES

var imageLib = ["images/kobe_bryant.jpg", "images/kobe_bryant.jpg", "images/steph_curry.jpg", "images/steph_curry.jpg", "images/kevin_durant.jpg", "images/kevin_durant.jpg", "images/anthony_davis.jpg", "images/anthony_davis.jpg", "images/lebron_james.jpg", "images/lebron_james.jpg"];
var shufImageLib;





