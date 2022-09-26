/*
    ===== Código de TypeScript =====
*/

let habilidades : string []= ['saltar', 'pelear', 'correr'];

interface Personaje {
nombre: string;
hp: number;
habilidades: string[];
puebloNatal?: string;
}

const personaje: Personaje ={
    nombre: 'allay',
    hp: 100,
    habilidades : ['saltar', 'pelear', 'correr']
}
personaje.puebloNatal = 'villa encantada';

console.table(personaje);


