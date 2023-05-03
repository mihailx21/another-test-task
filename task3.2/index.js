/*
3.2
Для цих змагань менеджер замовив певну кількість футболок різних розмірів. Усього надруковано футболки шести розмірів: 
S, M, L, XL, XXL, XXXL. Для кожного розміру відома кількість футболок.

Під час реєстрації організатори попросили кожного із n учасників вказати розмір футболки. Учасник міг обрати 2 розміри, 
наприклад, M і L - це означає, що йому може підійти будь-яка з цих футболок. Якщо учасник обирає 2 розміри, вони обов'язково 
повинні бути сусідніми. Це не може бути S та XXL.

Напишіть програму, яка визначить, чи можливо з футболок, які ми маємо, зробити подарунок усім спортсменам. Кожному учаснику 
має дістатись футболка його розміру:
    • необхідного розміру, якщо вказано один розмір;
    • будь-якого з двох розмірів, якщо вказано два сусідні розміри.
Якщо це можливо, програма повинна вивести будь-яке з можливих рішень.
*/
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data.json'));
console.log(data);

let tshirtsNeed = Object.assign({}, data.tshortsAsk);
console.log(tshirtsNeed);
let tshirtsCount = Object.assign({}, data.tshortsHave);
console.log(tshirtsCount);

function calculate(need, stockBalances){
    let storageTshirtSum = stockBalances.s +stockBalances.m + stockBalances.l +stockBalances.xl + stockBalances.xxl + stockBalances.xxl;
    let needTshirtSum = need.s_m + need.m_l + need.l_xl + need.xl_xxl + need.xxl_xxxl;
    let storage = Object.assign({}, stockBalances);
    if(storageTshirtSum >= needTshirtSum){
        console.log("Probable you got it, biger or either count of tshirts on the stock");
        // ask for S&M
        if(need.s_m <= storage.s + storage.m){
            storage.s -= need.s_m;
            if (storage.s < 0) {
                storage.m += storage.s;
                storage.s = 0;
                console.log("All ask M&L sizes closed by tshirts S&M-sizes");
            }
            else{
                console.log("All ask M&L sizes closed by tshorts S-size");
            }
        }
        else{
            return{
                answear: "No such tshirts S & M-sizes on stock balance"
            }
        }
            
        // ask for M & L
        if(need.m_l <= storage.m + storage.l){
            storage.m -= need.m_l;
            if (storage.m < 0) {
                storage.l += storage.m;
                storage.m = 0;
                console.log("All ask M & L sizes closed by tshirts M & L-sizes");
            }
            else{}
                console.log("All ask M & L sizes closed by tshorts M-size");
        }
        else{
            return{
                answear: "No such tshirts M & L-sizes on stock balance"
            }
        }

        // adk for L & XL
        if(need.l_xl <= storage.l + storage.xl){
            storage.l -= need.l_xl;
            if (storage.l < 0) {
                storage.xl += storage.l;
                storage.l = 0;
                console.log("All ask L & XL sizes closed by tshirts L&XL-sizes");
            }
            else
                console.log("All ask L & XL sizes closed by tshorts L-size");
        }
        else{
            return{
                answear: "No such tshirts L & XL-sizes on stock balance"
            }
        }
        // ask for XL & XXL 
        if(need.xl_xxl <= storage.xl + storage.xxl){
            storage.xl -= need.xl_xxl;
            if (storage.xl < 0) {
                storage.xxl += storage.xl;
                storage.xl = 0;
                console.log("All ask XL & XXL sizes closed by tshirts XL & XXL-sizes");
            }
            else
                console.log("All ask XL & XXL sizes closed by tshorts XL-size");
        }
        else{
            return{
                answear: "No such tshirts XL & XXL-sizes on stock balance"
            }
        }
        // ask for XXL & XXXL
        if(need.xxl_xxxl <= storage.xxl + storage.xxxl){
            storage.xxl -= need.xxl_xxxl;
            if (storage.xxl < 0) {
                storage.xxxl += storage.xxl;
                storage.xxl = 0;
                console.log("All ask XXL & XXXL sizes closed by tshirts XXL & XXXL-sizes");
            }
            else
                console.log("All ask XXL & XXXL sizes closed by tshorts XXL-size");
        }
        else{
            return{
                answear: "No such tshirts XXL & XXXL-sizes on stock balance"
            }
        }
    }
    else{
        console.log("There is no so much tshirts on the storage");
        return {answear: "There is no so much tshirts on the storage"}
    }
    return{
        answear: "You got it!",
        stockBalances: storage
    }
}
let result = calculate(tshirtsNeed, tshirtsCount);
console.log(result);
fs.writeFileSync('result.json', JSON.stringify(result));