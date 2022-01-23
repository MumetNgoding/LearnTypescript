"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_1 = require("./vehicle");
class Car extends vehicle_1.Vehicle {
    constructor() {
        super(...arguments);
        this.climateControl = '';
        this.automaticTransmission = false;
    }
    openHood() {
        console.log("Hood is open.");
    }
}
exports.Car = Car;
