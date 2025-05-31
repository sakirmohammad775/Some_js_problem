function taxCal(income,expense){
    let tex = 0;
    let taxRate = 0.2;
    if(income<0 || expense>income){
        console.log('Invalid Input')
        return
    }else{
        tex = (income - expense) * taxRate;
    }
    return tex
}

const finalTax=taxCal(-5000,2000)
if (finalTax !== undefined) {
    console.log(finalTax);
}
