//Задача5.Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.
//Материал для изучения: https://learn.javascript.ru/alert-prompt-confirm
const num = prompt('Введите число', 155639217);
function colonOdd (num) {
    let str = num.toString();
    let result = [str[0]];
    for(let i=1; i<str.length; i++) {
        if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
            result.push(':', str[i]);
        }
        else {
            result.push(str[i]);
        }
    }
    return result.join('');
}

document.writeln(colonOdd(num));