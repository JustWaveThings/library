function PrintStuff(myDocuments) {
    this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
    console.log(this.documents);
}

const test = new PrintStuff(" I am a new object and I can print... ")

test.print();

function Account() {
    
}

console.log(Object);
let myObj = new Account ();
console.log(myObj.constructor)

function Friend() {
    
}

const myFriends = { name: 'pete' };

console.log(myFriends.toString());


function People() {
    this.superstar = "Michael Jackson";
}

People.prototype.athlete = "Tiger Woods";

const famousPerson = new People();

famousPerson.superstar = "Steve Jobs";


//


let head = {
    glasses: 1
    
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};