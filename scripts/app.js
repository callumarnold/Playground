function getVowelCount(input) {
    //let wordArray: string[] = Object.assign([], input);
    var vowelCount = 0;
    for (var i = 0; i < input.length; i++) {
        var letter = input.charAt(i);
        if (vowelOrConsonant(letter) == "V") {
            vowelCount++;
        }
    }
    return vowelCount;
}
//Uses input text (vowelword) to getVowelCount and updates HTML
function countVowels() {
    var word = document.getElementById("vowelWord").value;
    var numberOfVowels = getVowelCount(word);
    var output = "The word has " + numberOfVowels + " vowels.";
    document.getElementById("vowelOutput").innerHTML = output;
}
//Uses input text(consonantWord) to getConsonantCount and updates HTML
function countConsonants() {
    var word = document.getElementById("consonantWord").value;
    var numberOfCons = getConsonantCount(word);
    var output = "The word has " + numberOfCons + " consonants.";
    document.getElementById("consonantOutput").innerHTML = output;
}
function getConsonantCount(input) {
    var consCount = 0;
    for (var i = 0; i < input.length; i++) {
        var letter = input.charAt(i);
        if (vowelOrConsonant(letter) == "C") {
            consCount++;
        }
    }
    return consCount;
}
function isVowel(letter) {
    var upper = letter.toUpperCase();
    if ((upper == 'A') || (upper == 'I') || (upper == 'E') || (upper == 'O') || (upper == 'U')) {
        return true;
    }
    else {
        return false;
    }
}
function isVowelSimplified(letter) {
    return ("aeiouAEIOU".indexOf(letter) != -1);
}
//takes input letter and uses regex to determine if letter is vowel, consonant or neither (special characters)
function vowelOrConsonant(letter) {
    if ("aeiouAEIOU".indexOf(letter) != -1) {
        return "V";
    }
    else if ("bcdfghjklmnpqrstvxzyBCDFGHJKLMNPQRSTVXYZ".indexOf(letter) != -1) {
        return "C";
    }
    else {
        return "N";
    }
}
//code taken from https://www.typescriptlang.org/docs/handbook/classes.html
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("human");
greeter.greet();
function randomGreeting() {
    var greetings = ["Hello", "Hiya", "Hi", "Hey"];
    return greetings[getRandomInt(greetings.length)];
}
//code taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//returns number between 0 and the given number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
window.onload = function () {
    document.getElementById("greeting").innerHTML = randomGreeting();
};
var HighScores = [];
function refreshScores() {
    var test = "";
    HighScores.forEach(function (e) {
        test = test + e.getHighScoreInfo();
    });
    return test;
}
function addLatestScore() {
    var name = document.getElementById("scoreName").innerHTML;
    var age = document.getElementById("scoreNumber").innerHTML;
    var score = new HighScore(name, age);
    document.getElementById("score1").innerHTML = score.name + score.score;
}
function addHighScore() {
    var name = document.getElementById("scoreName").innerHTML;
    var age = document.getElementById("scoreNumber").innerHTML;
    var score = new HighScore(name, age);
    HighScores.push(score);
    document.getElementById("score1").innerHTML = refreshScores();
}
var HighScore = /** @class */ (function () {
    function HighScore(pName, pScore) {
        this.name = pName;
        this.score = pScore;
    }
    HighScore.prototype.getHighScoreInfo = function () {
        var score = this.name.toString() + this.score.toString();
        return score;
    };
    return HighScore;
}());
