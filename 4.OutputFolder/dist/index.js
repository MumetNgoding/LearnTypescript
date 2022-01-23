"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("./lib/utilities");
class Greeting {
    sayHello(user, greetingFrom, answer) {
        console.log('Hello' + user + ' !!! from' + greetingFrom + answer + ' hay ');
    }
}
var g = new Greeting();
g.sayHello('Jack', ' Jenny', ' oke');
console.log(utilities_1.VersionInformation.getVersion());
