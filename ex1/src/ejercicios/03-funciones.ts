/*
    ===== Código de TypeScript =====
*/
function sumar (a:number, b:number):number{
    return a + b
};



const sumarArrow = (a: number, b:number):number => {
    return a + b 
}

function multiplicar (numberOne: number, otherNumber?: number, base= 2): number {

    return numberOne * base
    
}

interface PersonajeLOR {
    name: string;
    pv: number;
    mostrarHp: () => void
}

const nuevoPersonaje: PersonajeLOR ={
    name: "John Snow",
    pv:100,
    mostrarHp () {
        console.log ('puntos de vida', this.pv);
    }

}

function curar (personaje: PersonajeLOR , curarX: number): void {

    personaje.pv += curarX

    nuevoPersonaje.mostrarHp();
}

curar (nuevoPersonaje, 20);

