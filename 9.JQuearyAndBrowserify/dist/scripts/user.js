"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.fetchUsers = function (callback) {
        jquery_1.default.ajax({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET'
        }).then(function (response) {
            callback(response);
        });
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
//# sourceMappingURL=../../src/dist/scripts/user.js.map