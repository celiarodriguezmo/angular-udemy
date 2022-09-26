interface Reproductor {
    volumen: number;
    duracion: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    año: number
}

const reproductor: Reproductor = {
    volumen: 60,
    duracion: 170,
    cancion: 'where we are',
    detalles: {
        autor: 'Ed Sheeran',
        año: 2015
    }
}

const {volumen , duracion , cancion , detalles} = reproductor;

const {autor , año} = detalles;

console.log( 'El volumen del reproductor es de:' , volumen);
console.log( 'El duracion del reproductor es de:' , duracion);
console.log( 'La cancion del reproductor es :' , cancion);
console.log( 'El autor de la cancion es :' , autor);
console.log( 'El año de la cancion es :' , año);

const dragonBallCharacters: string [] = ['Goku', 'Vegeta', 'Krilin', 'Chichi', 'Songonada'];

const [p1 , p2 , p3 , p4, p5]= dragonBallCharacters
/* 
console.log( 'El personaje 1 es:', dragonBallCharacters[0]);
console.log( 'El personaje 2 es:', dragonBallCharacters[1]);
console.log( 'El personaje 3 es:', dragonBallCharacters[2]);
console.log( 'El personaje 4 es:', dragonBallCharacters[3]);
console.log( 'El personaje 5 es:', dragonBallCharacters[4]);
 */
console.log( 'El personaje 1 es:', p1);
console.log( 'El personaje 2 es:', p2);
console.log( 'El personaje 3 es:', p3);
console.log( 'El personaje 4 es:', p4);
console.log( 'El personaje 5 es:', p5);