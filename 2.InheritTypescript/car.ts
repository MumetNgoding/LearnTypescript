import { Vehicle } from "./vehicle";


export class Car extends Vehicle {
    climateControl: string = '';
    automaticTransmission: boolean = false;

    openHood(): void {
        console.log("Hood is open.");
    }
}