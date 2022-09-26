import { CallExpression, createNodeArray } from "typescript";

/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: ()=> string,
}

interface Direccion {
    
        calle: string,
        ciudad: string,
        pais: string
    
}

const superHeroe: SuperHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: "Main St",
        ciudad: "NY",
        pais: "USA"
    },
    mostrarDireccion() {
        return this.direccion.calle + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }

}
const direccion = superHeroe.mostrarDireccion();
console.log (superHeroe.nombre , direccion)