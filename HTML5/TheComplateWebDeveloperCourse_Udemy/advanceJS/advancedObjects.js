// reference type 
// objects are not the same even if the habe the same properties 
[] === []
//false 

let object1 = { value: 1 };
let object2 = object1;
let object3 = { value: 1 };

object1 === object2
    // true 
object1 === object3
    // false


// context - tells you where we are within the objects 

const object4 = {
    a: function() {
        console.log(this)
    }
}

// instantiation - make a copy of an object and reuse the codde - with word NEW 
class Player {
    constructor(name, type) {
        console.log("player", this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi! I am ${this.name}. and I am ${this.type}`)
    }
}
class Wizzard extends Player {
    constructor(name, type) {

        super(name, type)
        console.log("wizzard", this)
    }
    play() {
        console.log(`Weeeeee I am a ${this.type}`)
    }
}
const wizard1 = new Wizzard("Shelly", "Healer");
const wizard2 = new Wizzard("Shawn", "Dark Magic");
console.log(wizard1.play())


// Classical Inheritance
let Player = function(name, type) {
    this.name = name;
    this.type = type;
}

Player.prototype.introduce = function() {
    console.log(`Hi! I am ${this.name}. and I am ${this.type}`)
}

const wizard1 = new Wizzard("Shelly", "Healer");
const wizard2 = new Wizzard("Shawn", "Dark Magic");

wizard1.play = function() {
    console.log(`Weeeeee I am a ${this.type}`)
}

wizard2.play = function() {
    console.log(`Weeeeee I am a ${this.type}`)
}