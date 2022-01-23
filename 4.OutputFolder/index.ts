import { VersionInformation } from "./lib/utilities";


class Greeting {

    sayHello(user: string, greetingFrom: string, answer: string) :void{
        console.log('Hello' + user + ' !!! from' + greetingFrom + answer + ' hay ');
    }
}

var g: Greeting = new Greeting();

g.sayHello('Jack', ' Jenny', ' oke');

console.log(VersionInformation.getVersion());