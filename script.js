let num = 266219;
// Создание переменной num

let numString = num.toString();
let splitNumString = numString.split('');
// Переведение числа в строку и нахождение элементов


let sum = 1;
for(let i = 0; i < numString.length; i++) {
    sum *= splitNumString[i];
    // console.log(splitNumString[i]);
}
console.log('Произведение элементов массива равно: ', sum);
// Вычисление произведения элементов массива splitNumString

let powerOfSum = sum ** 3;
console.log('Степень числа, которое получилось в предыдущем задании - ', powerOfSum);
// Вычисление степени числа, полученного в предыдущем задании

let firstsNumberOfSum = powerOfSum.toString().split('', 2);
console.log('Первыми двумя числами являются: ', firstsNumberOfSum);
// Первые два числа из предпоследнего задания