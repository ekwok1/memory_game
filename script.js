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

// RESTART BOARD

function restartBoard(){
	var img = document.querySelectorAll("img");

	_.each(img, function(element){
		element.src = "images/nba_logo.jpg";
	});
}

// GLOBAL VARIABLES

var imageLib = ["images/anthony_davis.jpg", "images/anthony_davis.jpg", "images/james_harden.jpg", "images/james_harden.jpg",
								"images/jeremy_lin.jpg", "images/jeremy_lin.jpg", "images/kevin_durant.jpg", "images/kevin_durant.jpg", "images/lebron_james.jpg",
								"images/lebron_james.jpg", "images/rajon_rondo.jpg", "images/rajon_rondo.jpg", "images/steph_curry.jpg", "images/steph_curry.jpg",
								"images/kobe_bryant.jpg", "images/kobe_bryant.jpg"];
var shufImageLib;



















