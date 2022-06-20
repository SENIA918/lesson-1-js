
//Задача8.Используя функцию из задания 7 напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.

    let array1 = [5, 2, 1, -10, 8];
    let array2 = [5, 2, 1, -9, 3, 7];
    let union = function(array1, array2) {
        let array3 = [];
        let arr = array1.concat(array2);
        let len = arr.length;
        let obj = {};
        while(len--) {
            let itm = arr[len];
            if(!obj[itm]) {
                array3.unshift(itm);
                obj[itm] = true;
            }
        }
        return array3;
    };

    document.writeln(union(array1, array2)); // [-10,8,5,2,1,-9,3,7]
