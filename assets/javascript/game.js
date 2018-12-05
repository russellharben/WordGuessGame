$(document).ready(function () {

    var letters = $("#letters");
    var words = ["Wizard", "Sorcerer", "Saber", "Galaxy", "Starship"];
    var random = words[Math.floor(Math.random() * words.length)];
    var randomLower = random.toLowerCase();

    console.log(random + " <- Random word from array");
    console.log(random.length + " < - Number of characters in random word from array");

    var arr = randomLower;
    console.log(arr);

    var letterArr = [];

    for (i = 0; i < arr.length; i++) {
        // var dash = " _";
        $(letters).append("<span>" + "_ " + "</span>");
        $(letters).attr("class", "text-center");
        
        letterArr.push("_");
        console.log(arr[i]);
    }

    console.log(letterArr);



    $('body').on("keyup", function (e) {

        var char = e.keyCode;
        var charString = String.fromCharCode(char).toLowerCase();
        var wrong = $("#lettersWrong");
        console.log(charString);
        console.log(random.indexOf(charString));

        if (randomLower.indexOf(charString) > -1) {
            console.log("You're guessing a letter from the word");
            letterArr.splice(randomLower.indexOf(charString), 1, charString);
            console.log(letterArr);

        } else {
            console.log("Try guessing another letter...");
            $(wrong).append("<span>" + charString + ' ' + "</span>");
        }

    })
})

