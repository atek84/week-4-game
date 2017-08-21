var displayNumber = Math.floor(Math.random() * (90 - 30) + 30);
var wins = "";
var losses = "";
var totalScore = "";



console.log(displayNumber);

// $("#display-number").append("<span>" + displayNumber + "</span>");

var numberOptions = Math.floor(Math.random() * (20 - 5) + 5);
	// console.log(numberOptions)
  // Next we create a for loop to create crystals for every numberOption.
var crystal1 = $(".crystal1");


crystal1.attr("data-crystalvalue", numberOptions);

  
// $("#crystals").append(imageCrystal);

console.log(crystal1);

$(".crystal1").on("click", function() { 

	var crystal1Value = ($(this).attr("data-crystalvalue"));
    crystal1Value = parseInt(crystal1Value);

    totalScore += crystal1Value;
    alert(crystal1Value);
});
console.log(crystal1Value);

//   for (var i = 0; i < numberOptions.length; i++) {

//     // For each iteration, we will create an imageCrystal
//     var crystal1 = $(".crystal1");
//     var crystal2 = $(".crystal2");
//     var crystal3 = $(".crystal3");
//     var crystal4 = $(".crystal4");

//     // // First each crystal will be given the class ".crystal-image".
//     // // This will allow the CSS to take effect.
//     // imageCrystal.addClass("crystal-image");

//     // // Each imageCrystal will be given a src link to the crystal image
//     // imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//     // Each imageCrystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value.
//     crystal1.attr("data-crystalvalue", numberOptions[i]);
//     crystal2.attr("data-crystalvalue", numberOptions[i]);
//     crystal3.attr("data-crystalvalue", numberOptions[i]);
//     crystal4.attr("data-crystalvalue", numberOptions[i]);

//     console.log(crystal1);
//     console.log(crystal2);
//     console.log(crystal3);
//     console.log(crystal4);
// }
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //   $("#crystals").append(imageCrystal);
  // }

  // // This time, our click event applies to every single crystal on the page. Not just one.
  // $(".crystal-image").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
  //   var crystalValue = ($(this).attr("data-crystalvalue"));
  //   crystalValue = parseInt(crystalValue);
  //   // We then add the crystalValue to the user's "counter" which is a global variable.
  //   // Every click, from every crystal adds to the global counter.
  //   counter += crystalValue;

  //   // All of the same game win-lose logic applies. So the rest remains unchanged.
  //   alert("New score: " + counter);

  //   if (counter === targetNumber) {
  //     alert("You win!");
  //   }

  //   else if (counter >= targetNumber) {
  //     alert("You lose!!");
  //   }

  // });