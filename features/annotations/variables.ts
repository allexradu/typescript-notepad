let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;


// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {
}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When do you use annotations

// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) We declare the variable on one line and initialize it letter.

let words = ['red', 'green', 'blue']

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    foundWord = true;
}

// 3) When we have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]) {
        numberAboveZero = numbers[i];
    }
}

const add = (a: number, b: number): number => {
    return a + b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    // never going to finish the function completely
    throw  new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

// ES2015

logWeather(forecast);



