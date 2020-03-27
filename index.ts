export{ }
console.log('Welcome to ProGrad');

let x = 10;
const y = 20;

let sum;
const title="ProGrad";

let isbeginner: boolean = true;

let total: number = 20;
let name: string = "Venkatesh";
let sentence: string = ` My name is ${name}
and I am a beginner in typeScript`;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let person1: [string,number] = ['Venkatesh',25];
console.log(person1);
console.log(sentence);

enum Color {Red, Blue, Green};
let c: Color = Color.Red;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Venkat";
console.log(randomValue);


function add(number1: number,number2: number):number{
    return number1 + number2;
}

function addOptional(number1: number,number2?: number){
    if(number2)
    return number1 + number2;
    else
    return number1;
}
function addDefault(number1: number,number2: number = 10){
    if(number2)
    return number1 + number2;
    else
    return number1;
}
add(5,10);
addOptional(5);
addDefault(10,30);

interface Person{
    firstName: string;
    lastName: string;
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName : 'Bruce',
    lastName: 'Wayne'
};

fullName(p);


class Employee{
    employeeName: string;
    constructor(name:string){
        this.employeeName = name;
    }

    display(){
        console.log(`Welcome to class ${this.employeeName}`);
    }
}

let emp1= new Employee("Venkatesh");
emp1.display();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager delegating task`);
    }
}


let manager = new Manager('Venkatesh');
manager.delegateWork();
manager.display();
console.log(manager.employeeName);