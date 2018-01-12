//with arrow functions: arguments object and this keyword are no longer bound
// no access to 'arguments'

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1));


//this keyword:

//const user = {
    //name: 'Andrew',
    //cities: ['Philadelphia', 'New York', 'Dublin'],
    //printPlacesLived: function () {
        //console.log(this.name);      //'this' works here
        //console.log(this.cities);
        //const that = this; //now 'that' can be used anywhere

        //this.cities.forEach(function (city) {
            //console.log(that.name + ' has lived in ' + city); //'this 'does not work here
            //console.log(this.name + ' has lived in ' + city);
        //});

        //this.cities.forEach((city) => {
        //    console.log(this.name + ' has lived in ' + city);
        //});
    //}
//};

//OTHER WAY OF DOING IT:

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//CHALLENGE AREA

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());