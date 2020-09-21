console.log("Meteo App")

class Meteo {

    constructor(private ville: string, private temperature: number) {
    }

    toString():string {
        return `${this.ville} - ${this.temperature}°C`
        }
}

let nantesMeteo = new Meteo('Nates',12);
console.log(nantesMeteo.toString())
