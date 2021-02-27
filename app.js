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
