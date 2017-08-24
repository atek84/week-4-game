$(document).ready(function() {

  var displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var numberArray = [];

  function resetArray() {
    numberArray = [];
    totalScore = 0;
    displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
    $("#display-number").html("<span>" + displayNumber + "</span>");
  }

  function picknums() {

    for(i =0 ; numberArray.length < 4; i++){
      var pickRandom = Math.floor(Math.random() * (15 - 5) + 5);
    // console.log(numberArray.indexOf(pickRandom));
    // console.log(pickRandom +" is NOT unique, and found at index: " + numberArray.indexOf(pickRandom));

      if(numberArray.indexOf(pickRandom) < 0){
        numberArray.push(pickRandom);
        // console.log(numberArray.indexOf(pickRandom));
        // console.log(pickRandom +" is unique, and found at index: " + numberArray.indexOf(pickRandom));
        
        var crystal1 = $(".crystal1");
        var crystal2 = $(".crystal2");
        var crystal3 = $(".crystal3");
        var crystal4 = $(".crystal4");
        crystal1.attr("data-crystalvalue", numberArray[0]);
        crystal2.attr("data-crystalvalue", numberArray[1]);
        crystal3.attr("data-crystalvalue", numberArray[2]);
        crystal4.attr("data-crystalvalue", numberArray[3]);
      }
    } 
  }



//pick random numbers
picknums();
console.log(numberArray);
$("#display-number").html("<span>" + displayNumber + "</span>");




//gage
$("#total-score-display").html("<span>" + totalScore + "</span>");

// My code is not choosing a new displayNumber when the if statment is achieved, it only changes
//  when my if else if achieved. ----- Also, I'm trying to reset the totalScore var to display 0
//  in my line 9 function resetArray and it's not letting me do it.

function writeStats() {
  if (totalScore === displayNumber) {
    $("#total-score-display").html("<span>" + totalScore + "</span>");
    resetArray();
    console.log('you win');
    wins++;
      totalScore = 0;
    $('#win').html('Wins: ' + wins);
      // displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
      // $("#display-number").html("<span>" + displayNumber + "</span>");
    picknums();
    console.log(numberArray);  

  } else if (totalScore >= displayNumber) {
    $("#total-score-display").html("<span>" + totalScore + "</span>");
    resetArray();
    console.log("You lose!!");
    losses++;
      totalScore = 0;

    $('#loss').html('Losses: ' + losses);
      // displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
      // $("#display-number").html("<span>" + displayNumber + "</span>");

      
      picknums();
      console.log(numberArray);

    }
  }


  $(".crystal1").on("click", function() { 
   var crystal1Value = ($(this).attr("data-crystalvalue"));
   crystal1Value = parseInt(crystal1Value);

   totalScore += crystal1Value;
   console.log(crystal1Value);

   writeStats();


 });

  $(".crystal2").on("click", function() { 

    var crystal2Value = ($(this).attr("data-crystalvalue"));
    crystal2Value = parseInt(crystal2Value);

    totalScore += crystal2Value;
    console.log(crystal2Value);
    writeStats();
  });

  $(".crystal3").on("click", function() { 

    var crystal3Value = ($(this).attr("data-crystalvalue"));
    crystal3Value = parseInt(crystal3Value);
    
    totalScore += crystal3Value;
    console.log(crystal3Value);
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


