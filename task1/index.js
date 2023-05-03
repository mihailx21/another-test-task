/*
Завдання 1.  Два друга грають у гру, вони обидва загадують число. 
Перший повинен перетворити одне число на інше за допомогою множення цього числа на 2 (10 * 2 = 20) 
або додаванням одиниці праворуч (10 + 1 = 101). 

Потрібно написати програму, яка буде знаходити, чи можливо одне число перетворити на інше, 
використовуючи лише перераховані вище операції.
 */


// Перевірка диапазонів чисел
let first_arr = [];
for(let i = 1; i < 10001; i++){
    first_arr.push(i);
}

let second_arr = first_arr.slice();

for(let i = 0; i < first_arr.length; i++){
    first_arr[i] *= 2;
    second_arr[i] = +(second_arr[i].toString() + 1);
}

for(let i = 0; i < first_arr.length; i++){
    for(let j = 0; j < second_arr.length; j++){
        if(first_arr[i] === second_arr[j])
            console.log(`Match, you can transfer num ${i} into ${first_arr[i]} and ${second_arr[j]} in same time`)
    }  
}

// Неможливо перетворити бо в діапазонах чих чисел не має перетинання та рівних чисел
