window.onload = function() {
	addListeners();
};

// LOGIC:

// addListeners to all
// on click1 => remove listener from clicked; add class to image (picked)
// on click2 => add class to image (picked)
// compare two picked...if src == ; stay unflipped count + 1, otherwise, src back to nba_logo...
// if count = 5, show win message


// GAME LOGIC

var cardsFlipped = 0;

function cardCompareHelper(){
	var cardsPicked = document.querySelectorAll(".picked");
	if (cardsFlipped === 2) {
		if (cardsPicked[0].src === cardsPicked[1].src) {
			console.log("match");
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
			cardCompareHelper();
		});
	});
}

function shuffleIndex(){
	shufIndex = _.shuffle(indexLib);
}

var imageLib = ["images/kobe_bryant.jpg", "images/kobe_bryant.jpg", "images/steph_curry.jpg", "images/steph_curry.jpg", "images/kevin_durant.jpg", "images/kevin_durant.jpg", "images/anthony_davis.jpg", "images/anthony_davis.jpg", "images/lebron_james.jpg", "images/lebron_james.jpg"];
var indexLib = [0,1,2,3,4,5,6,7,8,9];
var shufIndex;


