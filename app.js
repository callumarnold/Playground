console.log("The word 'games' has " + countTheVowels("games").toString() + " vowels.");
console.log("The word 'video' has " + countTheVowels("video").toString() + " vowels.");
console.log("The word 'dog' has " + countTheVowels("dog").toString() + " vowels.");
console.log("The word 'dog' has " + countTheConsonants("dog").toString() + " consonants.");
function countTheVowels(input) {
    //let wordArray: string[] = Object.assign([], input);
    var vowelCount = 0;
    for (var i = 0; i < input.length; i++) {
        var letter = input.charAt(i);
        if (isVowel(letter)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
function countTheConsonants(input) {
    var consCount = 0;
    for (var i = 0; i < input.length; i++) {
        var letter = input.charAt(i);
        if (!isVowel(letter)) {
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
