"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static factorial(n) {
        if (n === 2) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map