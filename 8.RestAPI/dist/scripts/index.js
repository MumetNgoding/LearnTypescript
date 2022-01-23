"use strict";
var UserSignup = /** @class */ (function () {
    function UserSignup() {
    }
    UserSignup.prototype.signup = function () {
        var nameValue = this.getInputValue('name');
        var jobValue = this.getInputValue('job');
        this.invokeAPI({
            'name': nameValue,
            'job': jobValue
        });
    };
    UserSignup.prototype.successAlert = function () {
        window.alert('User successfully added.');
    };
    UserSignup.prototype.invokeAPI = function (data) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://reqres.in/api/users');
        xhr.send(data);
        xhr.onload = this.successAlert;
    };
    UserSignup.prototype.getInputValue = function (controlName) {
        return document.getElementById(controlName).value;
    };
    return UserSignup;
}());
function submitUserDetails() {
    var u = new UserSignup();
    u.signup();
    return false;
}
//# sourceMappingURL=../../src/dist/scripts/index.js.map