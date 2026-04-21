interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

//Object
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    }
}

//Destructuration on object
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
//details>author
const { author } = details;

/*console.log('Song:', anotherSong);
console.log('Duration:', duration);
console.log('Author:', author);
*/

//Array
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

//Destructuration on array
const [, , trunks = 'Not found' ] = dbz;

console.log('Personaje 3:', trunks);


export { };