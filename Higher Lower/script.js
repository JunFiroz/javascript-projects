let isValid = false;
let errorMessage = "";

// Uses a while loop to always ask for prompt input until it is a positive number, 1 or above

while (!isValid) {
    let max = prompt(`${errorMessage}Enter a positive value:`);
    let arrValidGuesses = [];
    let arrAllGuesses = [];

    // Examines if the player had entered a valid number into the prompt

    if (Math.round(Number(max)) > 0 && isNaN(max) === false) {
        isValid = true;
        max = Math.round(Number(max));
        console.log(max);
    
        // Adjusted code so the max is not just from 1 to 20. The maximum is at the player's choice

        document.getElementById("txtGuessRange").innerHTML = `Guess a number between 1 and ${max}.`; 
        let randomNumber = Math.floor(Math.random() * max) + 1;

        function higherLower(){
            let guess = Math.round(Number(document.getElementById("guess").value));

            // Checks to see if the player already entered a specific guess (no matter if it is valid or not)

            if (arrAllGuesses.indexOf(guess) != -1) {
                document.getElementById("txtResult").innerHTML = "You have already entered that number, try again.";
            }
            
            else {
                // Guesses that are valid (correct guesses and incorrect ones) and displayed once the user guesses the correct number
                // All numbers out of the range and non-numbers are excluded from the array that displays valid guesses
            
                if (guess < 1 || guess > max) {
                    arrAllGuesses.push(guess);
                    document.getElementById('txtResult').innerHTML = "That number is not in range, try again.";
                }

                else if (guess < randomNumber) {
                    arrAllGuesses.push(guess);
                    arrValidGuesses.push(guess);
                    document.getElementById("txtResult").innerHTML = "No, try a higher number.";
                }

                else if (guess > randomNumber) {
                    arrAllGuesses.push(guess);
                    arrValidGuesses.push(guess);
                    document.getElementById('txtResult').innerHTML = "No, try a lower number.";
                }

                else if (guess === randomNumber) {
                    arrAllGuesses.push(guess);
                    arrValidGuesses.push(guess);
                    document.getElementById('txtResult').innerHTML = `You got it! It took you ${arrValidGuesses.length} tries and your guesses were ${arrValidGuesses}.`;
                }
                
                else {
                    arrAllGuesses.push(guess);
                    document.getElementById('txtResult').innerHTML = "That is not a number!";
                }
            }
        }
    }

    else {
        errorMessage = `\'${max}\' is not a valid number. `; // Prompts the player that their prompt input is not a valid number
    }
}