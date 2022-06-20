//Задача3.Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.
   vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
    function copyArr(arr) {
        return arr.slice(0);
    };
    let arr1 = copyArr(arr)(vegetables);
    document.write(arr1);
}
