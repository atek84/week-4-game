$(document).ready(function() {

var displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
var wins = 0;
var losses = 0;
var totalScore = 0;
var numberArray = [];



function picknums() {
  for(i =0 ; numberArray.length < 4; i++){
    var pickRandom = Math.floor(Math.random() * (15 - 5) + 5);
    // console.log(numberArray.indexOf(pickRandom));
    console.log(pickRandom +" is NOT unique, and found at index: " + numberArray.indexOf(pickRandom));

    if(numberArray.indexOf(pickRandom) < 0){
      numberArray.push(pickRandom);
      console.log(numberArray.indexOf(pickRandom));
      console.log(pickRandom +" is unique, and found at index: " + numberArray.indexOf(pickRandom));
    }
  }
}

console.log(displayNumber);
//pick random numbers
picknums();
console.log(numberArray);
$("#display-number").html("<span>" + displayNumber + "</span>");

// var numberOptions1 = Math.floor(Math.random() * (15 - 5) + 5);
// var numberOptions2 = Math.floor(Math.random() * (10 - 5) + 5);
// var numberOptions3 = Math.floor(Math.random() * (10 - 5) + 5);
// var numberOptions4 = Math.floor(Math.random() * (12 - 5) + 5);
	// console.log(numberOptions)
  // Next we create a for loop to create crystals for every numberOption.
var crystal1 = $(".crystal1");
var crystal2 = $(".crystal2");
var crystal3 = $(".crystal3");
var crystal4 = $(".crystal4");


crystal1.attr("data-crystalvalue", numberArray[0]);
crystal2.attr("data-crystalvalue", numberArray[1]);
crystal3.attr("data-crystalvalue", numberArray[2]);
crystal4.attr("data-crystalvalue", numberArray[3]);

//gage



function writeStats() {
$("#total-score-display").html("<span>" + totalScore + "</span>");
if (totalScore === displayNumber) {
      console.log('you win');
      wins++;
      totalScore = 0;
      $('#win').html('Wins: ' + wins);
      displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
      $("#display-number").html("<span>" + displayNumber + "</span>");
      picknums();
      
    }

    else if (totalScore >= displayNumber) {
      console.log("You lose!!");
      losses++;
      totalScore = 0;

      $('#loss').html('Losses: ' + losses);
      displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
      $("#display-number").html("<span>" + displayNumber + "</span>");
      picknums();
    }
  }

$(".crystal1").on("click", function() { 
	var crystal1Value = ($(this).attr("data-crystalvalue"));
    crystal1Value = parseInt(crystal1Value);

    totalScore += crystal1Value;
    console.log(crystal1Value);
    var myCrystal1= ("<span>" + totalScore + "</span>");
    // $("#total-score-display").html(myCrystal1);
    writeStats();
});

$(".crystal2").on("click", function() { 

  var crystal2Value = ($(this).attr("data-crystalvalue"));
    crystal2Value = parseInt(crystal2Value);

    totalScore += crystal2Value;
    console.log(crystal2Value);
    // $("#total-score-display").html("<span>" + totalScore + "</span>");
    writeStats();
});

$(".crystal3").on("click", function() { 

  var crystal3Value = ($(this).attr("data-crystalvalue"));
    crystal3Value = parseInt(crystal3Value);
    
    totalScore += crystal3Value;
    console.log(crystal3Value);
    // $("#total-score-display").html("<span>" + totalScore + "</span>");
    writeStats();
});

$(".crystal4").on("click", function() { 

  var crystal4Value = ($(this).attr("data-crystalvalue"));
    crystal4Value = parseInt(crystal4Value);

    totalScore += crystal4Value;
    console.log(crystal4Value);
    
    writeStats();
});

  
    

});


  