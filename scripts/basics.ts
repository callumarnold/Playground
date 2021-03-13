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
        console.log(`Lego set ${this.setName} created.`);
        
    }

    calculatePrice(avgPricePerPiece: number){
        this.setPrice = this.setPcs * avgPricePerPiece;
    }
}

//create new lego sets
let HalloweenSet: LegoSet = new LegoSet("Halloween House", 2500, 5);
let StarWarsSet: LegoSet = new LegoSet("Darth Vader's TIE Advanced", 1300);

let avgPricePerPiece = 0.05;

//use class method to calc price using avergae price 
HalloweenSet.calculatePrice(avgPricePerPiece);

//log price to console
console.log(`The price of ${HalloweenSet.setName} is ${HalloweenSet.setPrice}`);
