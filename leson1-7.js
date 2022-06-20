//Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
//const arr = ["php", "php", "css", "css","script", "script", "html", "html", "java"];
//function removeDuplicates(arr) {

    // Ваш код

//}

//document.writeln(result);  // [php,css,script,html,java]
let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
function removeDuplicates(arr) {
    let empty = [];
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (empty.indexOf(e) === -1)
        empty.push(e);
    }
    return empty;
}
document.write(removeDuplicates(arr));