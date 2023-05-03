/*
Завдання 2.   Масив "arr" довжиною n+1 містить натуральні числа від 1 до n. 
Знайдіть будь-який елемент, що повторюється в масиві за оптимальний час (O(n)) 
не змінюючи вихідний масив і не використовуючи додаткову пам'ять.
*/
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data.json'));

let arr = data.array;

let result = arr.filter((currentValue, index, arr) => {
    let number;
    arr.forEach((el, indx)=>{
        if(el === currentValue && indx !== index)
            number = el; 
    });
    return number;
});
fs.writeFileSync('result.json', JSON.stringify({firstRepeatedElement: result[0]}));