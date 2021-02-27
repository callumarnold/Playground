function getVowelCount(input: string)
{
    //let wordArray: string[] = Object.assign([], input);
    let vowelCount: number = 0;

    for(let i = 0; i < input.length; i++)
    {
        let letter: string = input.charAt(i);
        if (vowelOrConsonant(letter) == "V")
        {
            vowelCount++;
        }
    }

    return vowelCount;
}

//Uses input text (vowelword) to getVowelCount and updates HTML
function countVowels(): void{
    let word = (document.getElementById("vowelWord") as HTMLInputElement).value;
    let numberOfVowels: number = getVowelCount(word);
    let output: string = "The word has " + numberOfVowels + " vowels.";
    document.getElementById("vowelOutput").innerHTML = output;

}

//Uses input text(consonantWord) to getConsonantCount and updates HTML
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
        if (vowelOrConsonant(letter) == "C")
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


function isVowelSimplified(letter: string)
{
    return ("aeiouAEIOU".indexOf(letter) != -1);
}

//takes input letter and uses regex to determine if letter is vowel, consonant or neither (special characters)
function vowelOrConsonant(letter: string): string
{
    if ("aeiouAEIOU".indexOf(letter) != -1)
    {
        return "V";
    }
    else if ("bcdfghjklmnpqrstvxzyBCDFGHJKLMNPQRSTVXYZ".indexOf(letter) != -1)
    {
        return "C";
    }
    else
    {
        return "N";
    }
}