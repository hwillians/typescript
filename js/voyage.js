"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.listSejours = [new Sejour('Montpellier', 1000), new Sejour('Paris', 2000)];
    }
    SejourService.prototype.rechercheNom = function (name) {
        for (var _i = 0, _a = this.listSejours; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.nom === name) {
                return sejour;
            }
        }
    };
    return SejourService;
}());
var serviceSejour = new SejourService();
console.log(serviceSejour.rechercheNom('Paris'));
