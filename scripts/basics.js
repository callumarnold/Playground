//Basic TypeScript principles
console.log("Interface created");
//create function 
function saySomething(user) {
    return "Hello my name is " + user.name + " and my favourite number is " + user.favNumber + ".";
}
//create instance of user
var Callum = {
    name: "Callum",
    favNumber: 21
};
console.log("Object created");
//call saySomething and pass newly created 'Callum' user object in, log the message via console
console.log(saySomething(Callum));
//Classes
//create new Lego set class, with optional param and constructor and method
var LegoSet = /** @class */ (function () {
    function LegoSet(pName, pPcs, pAge) {
        this.setName = pName,
            this.setPcs = pPcs;
        if (pAge !== undefined) //if pAge is not empty
         {
            this.minAge = pAge;
        }
        console.log("Lego set " + this.setName + " created.");
    }
    LegoSet.prototype.calculatePrice = function (avgPricePerPiece) {
        var price = this.setPcs * avgPricePerPiece;
        return price;
    };
    return LegoSet;
}());
//create new lego sets
var HalloweenSet = new LegoSet("Halloween House", 2500, 5);
var StarWarsSet = new LegoSet("Darth Vader's TIE Advanced", 1300);
