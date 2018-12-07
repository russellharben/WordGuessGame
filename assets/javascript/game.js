$(document).ready(function () {

    var words = ["baseball", "basketball", "football", "xbox", "playstation", "espn", "tennis", "nintendo", "twister", "monopoly"];

    var letterSpaces = [];

    var letterGuesses = [];

    var wins = 0;

    // Get a random number
    var randomNum = Math.floor(Math.random() * words.length);

    // User random number to get a word from game object
    var randomWord = words[randomNum];

    // Print randomly generated word
    console.log(randomWord);

    // whenever a correct letter is guessed print it on the screen at the correct position in the secret word
    for (i = 0; i < randomWord.length; i++) {
        letterSpaces.push(" _ ");
        $("#letters").append(" _ ");
        var correctLetters = $("#letters").text();
    }

    // not sure this is necessary at this point
    console.log(correctLetters + " this var holds the spaces to be printed to screen without commas");

    // empty array to hold correct num of underscores
    console.log(letterSpaces + " this is the empty space array before commas are removed");


    // Event listerner for keyboard presses
    $('body').on("keyup", function (e) {

        var x = e.keyCode;
        var choice = String.fromCharCode(x).toUpperCase();


        // print a correct guess out to the screen in all the correct array positions
        for (i = 0; i < randomWord.length; i++) {
            if (randomWord[i].toUpperCase() == choice) {
                letterSpaces[i] = choice;
                $("#letters").text(letterSpaces.join(""));
                // not sure why this works the way it does - length gets smaller as letters are filled in
                console.log($("#letters").text().length);

                // if all the letters are guessed, throw an alert to congratulate player
                if ($("#letters").text().length <= randomWord.length) {
                    alert("Congratulations, " + randomWord.toUpperCase() + " is correct! You won!");
                    location.reload();
                }
            }
        }

        // add an incorrect guess to the list of missed letters
        if (randomWord.toUpperCase().indexOf(choice) < 0) {
            $("#lettersWrong").append("<span>" + choice + " " + "</span>");

            //keep track of wrong guesses
            letterGuesses.push(choice);
            var guesses = letterGuesses.length;

            // when the number of wrong guesses equals the length of the word the player has to try again
            if (guesses >= randomWord.length) {
                alert("Oh, no! That's all your guesses. The secret word was " + randomWord.toUpperCase());
                location.reload();
            }
        }
    })

    var guess = $("#guess");
    guess.on("click", function () {
        var pro = prompt("Guess the secret word...");
        var input = pro.toLowerCase();
        if (input == randomWord) {
            alert("Congratulations, " + randomWord.toUpperCase() + " is correct!")
            location.reload();
        } else {
            alert("Nope, keep guessing...");
        }
    })

    

});