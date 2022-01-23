"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor() {
        this.numOfWheels = 0;
        this.engineType = '';
        this.horn = true;
    }
    turnLeft() {
        console.log("Turn left invoked from vehicle.");
    }
    turnRight() {
        console.log("Turn right invoked from vehicle.");
    }
    blowHorn() {
        console.log("Dont honk");
    }
}
exports.Vehicle = Vehicle;
