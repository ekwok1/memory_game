window.onload = function() {
	addListeners();
};

// GAME LOGIC

var cardsFlipped = 0;

function cardCompare(){
	var cardsPicked = document.querySelectorAll(".picked");
	if (cardsFlipped === 2) {

		if (cardsPicked[0].src === cardsPicked[1].src) {
			cardsPicked[0].classList.remove("picked");
			cardsPicked[1].classList.remove("picked");
			cardsPicked = [];
			cardsFlipped = 0;
			console.log("match");
		} else {
			cardsPicked[0].src = "images/nba_logo.jpg";
			cardsPicked[1].src = "images/nba_logo.jpg";
			cardsPicked[0].classList.remove("picked");
			cardsPicked[1].classList.remove("picked");
			cardsPicked = [];
			console.log(cardsPicked);
			cardsFlipped = 0;
		}
	}	
}

// ADD LISTENRS TO CARDS WITH RANDOM POSITION OF CARDS [ADDING GAME LOGIC]
function addListeners(){
	var img = document.querySelectorAll("img");

	shuffleIndex();

	_.each(img, function(element, index){
		element.addEventListener("click", function(){
			this.src = imageLib[shufIndex[index]];
			this.classList.add("picked");
			cardsFlipped++;
			window.setTimeout(function(){cardCompare()}, 1000);
		});
	});
}

function shuffleIndex(){
	shufIndex = _.shuffle(indexLib);
}

var imageLib = ["images/kobe_bryant.jpg", "images/kobe_bryant.jpg", "images/steph_curry.jpg", "images/steph_curry.jpg", "images/kevin_durant.jpg", "images/kevin_durant.jpg", "images/anthony_davis.jpg", "images/anthony_davis.jpg", "images/lebron_james.jpg", "images/lebron_james.jpg"];
var indexLib = [0,1,2,3,4,5,6,7,8,9];
var shufIndex;


