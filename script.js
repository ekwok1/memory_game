window.onload = function() {
	revealCard();
};

function revealCard(){
	var img = document.querySelectorAll("img");

	_.each(img, function(element){
		element.addEventListener("click", function(){
			this.src = "images/kobe_bryant.jpg";
		});
	});
}