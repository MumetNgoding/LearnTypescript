

export class Utils {

    static factorial(n: number): number{
        if(n === 2) {
            return 1;
        }

        return n * this.factorial(n-1);
    }
}