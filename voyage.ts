class Sejour {
    constructor(private _nom: string, private _prix: number) {

    }
    get nom() {
        return this._nom;
    }

    get prix() {
        return this._prix;
    }
}

class SejourService {
    private listSejours: Sejour[];

    constructor() {
      this.listSejours =  [new Sejour('Montpellier', 1000), new Sejour('Paris', 2000)]
    }

       rechercheNom(name: string) :  Sejour | void{
        for (let sejour of this.listSejours) {
            if (sejour.nom === name) {
                return sejour
            }
        }
    }
}

const serviceSejour = new SejourService()

console.log(serviceSejour.rechercheNom('Paris'))