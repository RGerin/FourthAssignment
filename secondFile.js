/**
 * @author Roseanne
 */

//This is a handler function.
function addJsonToPage(thirdFile){

//I am adding a console log.
console.log(thirdFile);

//Adding a first div. With this command, I'm asking the computer to go to the JSON file and get the third element under someCandies.
var firstDiv = $("<div>");
$(firstDiv).html(thirdFile.someCandies[2].type);
$("#dataPackage").append(firstDiv);

//Second div. With this command, I'm asking the computer to go to the JSON file and get the second element under someCandies.
var secondDiv = $("<div>");
$(secondDiv).html (thirdFile.someCandies[1].type);
$("#dataPackage").append(secondDiv);

//Third div. With this command, I'm asking the computer to go to the JSON file and get the first element under someCandies.
var thirdDiv = $("<div>");
$(thirdDiv).html (thirdFile.someCandies[0].type);
$("#dataPackage").append(thirdDiv);

}

function Chocolate(){

//I am creating a function called Chocolate, and this function will add a new paragraph on my web page.
var firstDiv = $("<div>");
$(firstDiv).html("Eating too much chocolate is not good for your health.")
$("#dataPackage").append(firstDiv);

//I am creating a second div.
var secondDiv = $("<div>");
$(secondDiv).html("Most doctors do not recommend eating too much chocolate.")
$("#dataPackage").append(secondDiv);

//I am adding a command to order the js to get the data from the Json file.
$.get("thirdFile.json", addJsonToPage, "json");

console.log("Ghana is one of the largest chocolate producers.");
	
}

$(document).ready(Chocolate);

console.log ("scripts js file loaded")
