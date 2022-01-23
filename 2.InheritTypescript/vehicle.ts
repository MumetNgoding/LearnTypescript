

export class Vehicle {
    numOfWheels: number = 0;
    engineType: String = '';
    horn: boolean = true;

    turnLeft(): void {
        console.log("Turn left invoked from vehicle.");

    }

    turnRight(): void {
        console.log("Turn right invoked from vehicle.");

    }

    blowHorn(): void {
        console.log("Dont honk");
    }
}