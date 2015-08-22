window.onload = function() {
	revealCard();
};

var imageLib = ["images/kobe_bryant.jpg", "images/kobe_bryant.jpg", "images/steph_curry.jpg", "images/steph_curry.jpg", "images/kevin_durant.jpg", "images/kevin_durant.jpg", "images/anthony_davis.jpg", "images/anthony_davis.jpg", "images/lebron_james.jpg", "images/lebron_james.jpg"];
var indexLib = [0,1,2,3,4,5,6,7,8,9];
var shufIndex;

function shuffleIndex(){
	shufIndex = _.shuffle(indexLib);
}

function revealCard(){
	var img = document.querySelectorAll("img");

	shuffleIndex(); //[9, 5, 1, 3, 6, 4, 7, 0, 2, 8]

	_.each(img, function(element, index){
		element.addEventListener("click", function(){
			this.src = imageLib[shufIndex[index]];
		});
	});
}