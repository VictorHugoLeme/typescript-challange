let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function addNumber(num1: number, num2: number, shouldPrint: boolean, prefix: string) {
    let result = num1 + num2;
    if (shouldPrint) {
        console.log(prefix + result);
    }
}

let shouldPrint = true;
let prefix = "The sum is: ";

button?.addEventListener('click', () => {
    addNumber(Number(input1.value), Number(input2.value), shouldPrint, prefix);
});