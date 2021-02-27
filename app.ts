//console.log("The word 'games' has " + countTheVowels("games").toString() + " vowels.");
//console.log("The word 'video' has " + countTheVowels("video").toString() + " vowels.");
//console.log("The word 'dog' has " + countTheVowels("dog").toString() + " vowels.");
//console.log("The word 'dog' has " + countTheConsonants("dog").toString() + " consonants.");

function getVowelCount(input: string)
{
    //let wordArray: string[] = Object.assign([], input);
    let vowelCount: number = 0;

    for(let i = 0; i < input.length; i++)
    {
        let letter: string = input.charAt(i);
        if (isVowel(letter))
        {
            vowelCount++;
        }
    }

    return vowelCount;
}

function countVowels(): void{
    let word = (document.getElementById("vowelWord") as HTMLInputElement).value;
    let numberOfVowels: number = getVowelCount(word);
    let output: string = "The word has " + numberOfVowels + " vowels.";
    document.getElementById("vowelOutput").innerHTML = output;

}

function countConsonants(): void{
    let word = (document.getElementById("consonantWord") as HTMLInputElement).value;
    let numberOfCons: number = getConsonantCount(word);
    let output: string = "The word has " + numberOfCons + " consonants.";
    document.getElementById("consonantOutput").innerHTML = output;
}

function getConsonantCount(input: string)
{
    let consCount: number = 0;

    for(let i = 0; i < input.length; i++)
    {
        let letter: string = input.charAt(i);
        if (!isVowel(letter))
        {
            consCount++;
        }
    }

    return consCount;

}

function isVowel(letter: string)
{
    let upper: string = letter.toUpperCase();
    if((upper == 'A') || (upper == 'I') || (upper == 'E') || (upper == 'O') || (upper == 'U'))
    {
        return true;       
    }
    else
    {
        return false;
    }
}