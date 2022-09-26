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