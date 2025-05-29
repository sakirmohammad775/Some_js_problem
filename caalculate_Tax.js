function taxCal(income,expense){
    let tex = 0;
    let taxRate = 0.2;
    const diff=income-expense
    tex= diff*taxRate
    return tex
}
const income = 10000;
const expense = 3000;
const finalTax=taxCal(income,expense)
console.log(finalTax)