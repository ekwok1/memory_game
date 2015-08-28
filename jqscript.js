$(function(){
  shuffleLib();
  addListener();
});

// Reset Button

function reset(){
  for (i=0; i<16; i++) {
    $(".card").children()[i].src = "images/nba_logo.jpg";
    $(".card").addClass("unmatched");
    score = 0;
    $("#currentScore").html(score);
    $("#congrats").text("");
  }
}

// Compare Card

var score = 0;
var congrats = "Congratulations! You Win!!";

function cardCompare(){
  if ($(".picked")[0].children[0].src === $(".picked")[1].children[0].src) {
    $(".picked").removeClass("picked").removeClass("unmatched");
    score++;
    if (score === 8) {
      $("#congrats").append(congrats);
    }
    $("#currentScore").html(score);
  } else {
    $(".picked")[0].children[0].src = "images/nba_logo.jpg";
    $(".picked")[1].children[0].src = "images/nba_logo.jpg";
    $(".picked").removeClass("picked");
    addListener();
  }
}

// Add Listeners

var toUnmatched = function toUnmatched(){
  if ($(".picked").length < 2) {
    $(this).addClass("picked");
    $(".picked").off("click", toUnmatched);
    $(this)[0].children[0].src = shufImageLib[$(".card").index($(this))];
  }
  if ($(".picked").length === 2) {
    window.setTimeout(function(){cardCompare();}, 1000);
  }
};

function addListener(){
  $(".unmatched").on("click", toUnmatched);
}

// Shuffle

function shuffleLib(){
  shufImageLib = _.shuffle(imageLib);
}

var shufImageLib;
var imageLib = ["images/anthony_davis.jpg", "images/anthony_davis.jpg", "images/james_harden.jpg", "images/james_harden.jpg",
                "images/jeremy_lin.jpg", "images/jeremy_lin.jpg", "images/kevin_durant.jpg", "images/kevin_durant.jpg", "images/lebron_james.jpg",
                "images/lebron_james.jpg", "images/rajon_rondo.jpg", "images/rajon_rondo.jpg", "images/steph_curry.jpg", "images/steph_curry.jpg",
                "images/kobe_bryant.jpg", "images/kobe_bryant.jpg"];