export class Person {
    public firstName: string;
    public lastName: string;
    private address: string = "No address";

    // The constructor is a special method that is called when an instance of the class is created.
    constructor(firstName: string, lastName: string, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
}

// Inheritance
/*export class Hero extends Person {

    public alterEgo: string;
    public age: number;
    public realName: string;

    constructor(alterEgo: string, age: number, realName: string) {
        super(realName, 'New York')
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
}*/

export class Hero {

    public alterEgo: string;
    public age: number;
    public realName: string;
    public person: Person;

    constructor(alterEgo: string, age: number, realName: string, person: Person,) {
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
        this.person = person;
    }
}

// Creating an instance of the Hero class
const tony = new Person('Tony', 'Stark', 'New York');

// Dependency Injection: We are injecting the Person instance (tony) into the Hero class.
const ironman = new Hero('Iron Man', 45, 'Tony', tony);

console.log(ironman);