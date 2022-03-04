fitnessArray = ["weights", "bodybuilding", "powerlifting", "hiking", "yoga", "coach", 
"competition", "shoes", "gym", "running", "squat", "deadlift", "bicep", "coach", "weightlifting"];

imagesArray =["assets/images/hangman6.png", "assets/images/hangman5.png", "assets/images/hangman4.png",
"assets/images/hangman3.png", "assets/images/hangman2.png", "assets/images/hangman1.png", "assets/images/hangman0.png"];


var random = "";
var randomFitness = "";
var fitnessHidden;
var wrongletters = [];
var wins = 0;
var guessesremaining = 6;

document.getElementById("wins").innerHTML = " " + wins;
document.getElementById("guessesremaining").innerHTML = " " + guessesremaining;
document.getElementById("guesstheword").innerHTML = "Guesses";

document.onkeyup = function(event) {
	document.getElementById("genword").innerHTML = "";

	var keyPress = event.key;

	keyPress = keyPress.toLowerCase();

	
	if (randomFitness === "") {
		
		if (keyPress === "0") {
			initRound();
			
		}

		else {

		document.getElementById("genword").innerHTML = "Press 0 to Generate a New Word";

		}
 	
	}
	else {
	
		if (keyPress >= 'a' && keyPress <= 'z') {
			var match = false;
			for (var j = 0; j < randomFitness.length; j++) {
				if (keyPress === randomFitness[j]) {
				 fitnessHidden[j] = keyPress;
					match = true;
				}
				
			}
			document.getElementById("wordtoguess").innerHTML = " " + fitnessHidden.join(" ");

			if (match === false) {

				if (wrongletters.includes(keyPress)){
					document.getElementById("genword").innerHTML = "Already Guessed - Select a New Letter";
				}
				else { 
					wrongletters.push(keyPress); 
					document.getElementById("guessed").innerHTML = " " + wrongletters.join(" ");
					guessesremaining--;
					document.getElementById("guessesremaining").innerHTML = " " + guessesremaining;
					document.getElementById("hangimages").src = imagesArray[guessesremaining];
					if (guessesremaining === 0) {
						document.getElementById("guesstheword").innerHTML = "You lose! The word you were trying to guess was:"
						document.getElementById("genword").innerHTML = "Press 0 to Generate a New Word";
						document.getElementById("wordtoguess").innerHTML = " " + randomFitness;
						randomFitness = "";
					}	
				}

			}
			if  (fitnessHidden.join("") == randomFitness) {
				wins++;
				document.getElementById("wins").innerHTML = " " + wins;
				randomFitness = "";
				document.getElementById("genword").innerHTML = "Press 0 to Generate a New Word";

			}
		}
		else {
			document.getElementById("genword").innerHTML = "Press any letter key to make a guess"; 
		}	
	}
};

function initRound(){
	random = Math.floor(Math.random() * fitnessArray.length);
	randomFitness = fitnessArray[random];
 fitnessHidden = new Array(randomFitness.length);
	wrongletters = [];
	guessesremaining = 6;
	for (var i = 0; i < fitnessHidden.length; i++){
	 fitnessHidden[i] = "_";

	}
	document.getElementById("guesstheword").innerHTML = "Guess the Word by Pressing Letters:";
	document.getElementById("wordtoguess").innerHTML = " " + fitnessHidden.join(" ");
	document.getElementById("guessed").innerHTML = " " + wrongletters.join(" ");
	document.getElementById("guessesremaining").innerHTML = " " + guessesremaining;
	document.getElementById("hangimages").src = imagesArray[guessesremaining];

};
