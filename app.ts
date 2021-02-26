console.log("The word 'games' has " + countTheVowels("games").toString() + " vowels.");
console.log("The word 'video' has " + countTheVowels("video").toString() + " vowels.");
console.log("The word 'dog' has " + countTheVowels("dog").toString() + " vowels.");

function countTheVowels(input: string)
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