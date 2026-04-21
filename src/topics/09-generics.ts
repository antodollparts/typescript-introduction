//Generics allow us to create reusable components that can work with different types of data. They provide a way to define a function, class, or interface that can operate on any type specified by the user.
export function whatsMyType<T>(argument: T) : T {
    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber= whatsMyType<number>(100);
let amIArray=whatsMyType<number[]>([1, 2, 3, 4, 5]);


console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));