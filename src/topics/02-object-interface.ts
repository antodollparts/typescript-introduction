const skills: string[] = ['Bash', 'Counter', 'Healing'];

//Define una interfaz para un objeto
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //Propiedad opcional
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown='Rivendell';

console.table(strider);

export{};