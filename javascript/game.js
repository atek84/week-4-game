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

picknums();
console.log(numberArray);

$("#display-number").html("<span>" + displayNumber + "</span>");

  function resetArray() {

    numberArray = [];
    // $("#total-score-display").html("<span>" + totalScore + "</span>");
    displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
    $("#display-number").html("<span>" + displayNumber + "</span>");
  }
  function writeStats() {

    $("#total-score-display").html("<span>" + totalScore + "</span>");
    if (totalScore === displayNumber) {
      resetArray();
      console.log('you win');
      
      wins++;
      totalScore = 0;
      $('#win').html('Wins: ' + wins);
      picknums();
      console.log(numberArray);  
      resetGame();
      // $("#total-score-display").html("<span>" + totalScore + "</span>");
      

    } else if (totalScore >= displayNumber) {
      resetArray();
      console.log("You lose!!");
      // $("#total-score-display").html("<span>" + totalScore + "</span>");
      losses++;
      totalScore = 0;
      $('#loss').html('Losses: ' + losses);
      picknums();
      console.log(numberArray); 
      resetGame();
    }
  }


  function resetGame() {
    if(wins === 5 || losses === 5) {
    alert("Play Again!");
    wins = 0;
    losses = 0;
    $("#total-score-display").html(totalScore);
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


