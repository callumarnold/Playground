//Basic TypeScript principles

//Object Types

//create user interface
interface User {
    name: string;
    favNumber: number;
}
console.log("Interface created");

//create function 
function saySomething(user: User){
    return `Hello my name is ${user.name} and my favourite number is ${user.favNumber}.`;
}

//create instance of user
let Callum: User = {
    name: "Callum",
    favNumber: 21
};
console.log("Object created");

//call saySomething and pass newly created 'Callum' user object in, log the message via console
console.log(saySomething(Callum));

//Classes

//create new Lego set class, with optional param and constructor and method
class LegoSet {
    setName: string;
    setPcs: number;
    minAge?: number;
    setPrice: number;

    constructor(pName: string, pPcs: number, pAge?: number){
        this.setName = pName,
        this.setPcs = pPcs
        if(pAge !== undefined) //if pAge is not empty
        {
            this.minAge = pAge;
        }
        else
        { 
            this.minAge = 0;
        }
        if (avgPricePerPiece !== undefined)
        {
            this.calculatePrice(avgPricePerPiece);
            console.log(`Lego set ${this.setName} price set to ${this.setPrice}.`);
        }
        console.log(`Lego set ${this.setName} created sucessfully.`);
        
    }

    calculatePrice(avgPricePerPiece: number){
        this.setPrice = this.setPcs * avgPricePerPiece;
    }

    listDetails(){
        return `Lego set name: ${this.setName}, Pcs: ${this.setPcs}, Min Age: ${this.minAge}, Price: ${this.setPrice}.`;
    }
}

//create piece per brick variable
var avgPricePerPiece = 0.05;

//create set array with two lego sets in it
let legoSetArray: LegoSet[] = 
    [new LegoSet("Halloween House", 2500, 5), new LegoSet("Darth Vader's TIE Advanced", 1300)];

//create new lego set and push to lego set array
let DuploSet: LegoSet = new LegoSet("Happy Cats", 40);
legoSetArray.push(DuploSet);

//loop through array and log set details
legoSetArray.forEach(function(legoSet) {
    console.log(legoSet.listDetails());
});



