"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var jquery_1 = __importDefault(require("jquery"));
jquery_1.default(document).ready(invokeAPI);
function invokeAPI() {
    var userRepo = new user_1.UserRepository();
    userRepo.fetchUsers(renderUsers);
}
function renderUsers(response) {
    var tableHtml = "<tr><td>Id</td><td>First name</td><td>Last name</td></tr>";
    for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
        var user = _a[_i];
        tableHtml += "<tr><td>" + user.id + "</td><td>" + user.first_name + "</td><td>" + user.last_name + "</td></tr>";
    }
    jquery_1.default('#userListingTable').html(tableHtml);
}
//# sourceMappingURL=../../src/dist/scripts/index.js.map