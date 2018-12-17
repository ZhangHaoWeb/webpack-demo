const config = require('./config.json');

class Animal{
    constructor(name){
        "use strict";
        this.name = name;
    }
    say(){
        "use strict";
        console.log(this.name + config.greetText);
    }
}

class Dog extends Animal{

}


export default Animal

