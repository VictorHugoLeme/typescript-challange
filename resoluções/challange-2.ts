interface Person {
    name: string;
    age: number;
    job: Job;
}

enum Job {
    Actress,
    Baker
}

let person1: Person = {
    name: "maria",
    age: 29,
    job: Job.Actress
};

let person2: Person = {
    name: "roberto",
    age: 19,
    job: Job.Baker
};

let person3: Person = {
    name: "laura",
    age: 32,
    job: Job.Actress
};

let person4: Person = {
    name: "carlos",
    age: 19,
    job: Job.Baker
}