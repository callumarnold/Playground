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
        else {
            this.minAge = 0;
        }
        if (avgPricePerPiece !== undefined) {
            this.calculatePrice(avgPricePerPiece);
            console.log("Lego set " + this.setName + " price set to " + this.setPrice + ".");
        }
        console.log("Lego set " + this.setName + " created sucessfully.");
    }
    LegoSet.prototype.calculatePrice = function (avgPricePerPiece) {
        this.setPrice = this.setPcs * avgPricePerPiece;
    };
    LegoSet.prototype.listDetails = function () {
        return "Lego set name: " + this.setName + ", Pcs: " + this.setPcs + ", Min Age: " + this.minAge + ", Price: " + this.setPrice + ".";
    };
    return LegoSet;
}());
//create piece per brick variable
var avgPricePerPiece = 0.05;
//create set array with two lego sets in it
var legoSetArray = [new LegoSet("Halloween House", 2500, 5), new LegoSet("Darth Vader's TIE Advanced", 1300)];
//create new lego set and push to lego set array
var DuploSet = new LegoSet("Happy Cats", 40);
legoSetArray.push(DuploSet);
legoSetArray.forEach(function (legoSet) {
    console.log(legoSet.listDetails());
});
