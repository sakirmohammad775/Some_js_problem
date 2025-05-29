function evenNumber(numbers){
    const evens=[]
    for(const number of numbers){
        if(number%2===0){
            console.log(number)
            evens.push(number)
        }
    }
    return evens
}
const numbers=[34,56,13,23,36,48]
const evens=evenNumber(numbers)
console.log('ki hoi nai',evens)