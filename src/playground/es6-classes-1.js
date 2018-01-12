/*class Person {
    constructor(name) { 
        this.name =name || 'test'; //test value would appear if there is no name defined (like in "other")
    }
}*/

/*class Person {
    constructor(name = 'Anonymous') { //anonymous would appear if there is no name defined 
        this.name =name; 
    }
    getGretting() {
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`; //the same as above but using es6, best practice
    }
}

const me = new Person ('Claudia Lorenzo');
console.log(me.getGretting());

const other = new Person();
console.log(other.getGretting());*/


class Person {
    constructor(name = 'Anonymous', age = '0') {
        this.name = name; 
        this.age = age;
    }
    getDescription() {
        //return `${this.name} is ${this.age} year(s) old.`;
        return `Hi. I am ${this.name} and I am ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.homeLocation) {
            description += ` I'm visiting from ${this.homeLocation}.`;
        }

        return description;
    }
}

const me = new Traveler ('Claudia', '26', 'Tenerife');
const he = new Traveler ();
console.log(me.getDescription());
console.log(he.getDescription());