interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly firstName?: string;
  outputName?: string;
}

interface SecondName {
  readonly secondName: string;
}

interface Greetable extends Named, SecondName {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;

  constructor(public secondName: string, public firstName?: string) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.secondName} ${this.firstName ?? 'Unknown'}`);
  }
}

let user1: Greetable;

user1 = new Person('Bugaev', 'Max');

user1.greet('Hi there - I am');
