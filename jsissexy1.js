function PrintStuff(myDocuments) {
    this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
    console.log(this.documents);
}

const test = new PrintStuff(" I am a new object and I can print... ")

test.print();