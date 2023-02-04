//    Перед нами стоит задача написать функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
// Например, что мы ожидаем:  ([1, 2], [2, 3]) => [2]

//Функция проверяет пересечение множества массивов.
const intersection = (...arrays) => {
    let result = [];
    let arrayFirst = arrays.shift();

    for (let item of arrayFirst) {
        if (isInArrays(arrays, item)) {
            result.push(item);
        }
    }

    let finalArray = [...new Set(result)];

    return finalArray;
}

function isInArrays(arrays, item) {
    for (let array of arrays) {
        if (!isInArray(array, item)) {
            return false;
        }
    }
    return true;
}

function isInArray(array, item) {
    if (array.indexOf(item) === -1) {
        return false;
    } else {
        return true;
    }

}




//Функция проверяет intersection
function testIntersection() {
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const arr3 = ['a', 'b'];
    const arr4 = ['b', 'c'];
    const arr5 = ['b', 'e', 'c'];
    const arr6 = ['b', 'b', 'e'];
    const arr7 = ['b', 'c', 'e', 'e'];
    const arr8 = ['b', 'e', 'c'];
    console.log(intersection(arr1, arr2)) // [2]
    console.log(intersection(arr3, arr4, arr5)) // ['b']
    console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
    const arr9 = [1, 3, 44];
    const arr10 = [1, 1, 1, 10, 44];
    const arr11 = ['b', 'c', 12];
    const arr12 = ['b', 12];
    const arr13 = ['b', 'jjj'];
    const arr14 = ['a', 'jjj'];
    const arr15 = ['a', 'jjj', 12];
    console.log(intersection(arr9, arr10)) // [1, 44]
    console.log(intersection(arr11, arr12, arr13, arr14)) // []
    console.log(intersection(arr11, arr12, arr13)) // ['b']
    console.log(intersection(arr11, arr12, arr15)) // [12]
}

testIntersection();


//Функция работает для двух массивов. Оставляю для себя
// const intersection = (...arrays) => {
//     let len = arrays.length;

//     for (let i = 0; i < len; i++) {
//         let result = arrays[i].filter(function(item) {
//             let nextArr = arrays[i+1];
//             let targetIndex = nextArr.indexOf(item);
//             if (targetIndex > -1) {
//                 return nextArr.splice(targetIndex, 1);
//             } else {
//                 return false;
//             };
//         });
//         return result;
//     }
// }


