window.onload = function() {
	revealCard();
};

function revealCard(){
	var card = document.querySelectorAll(".card");

	_.each(card, function(element) {
		element.addEventListener("click", function(){
			this.classList.remove("facedown");
		});
	});
}