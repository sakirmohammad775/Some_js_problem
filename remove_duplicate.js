function noDuplicate(array){
    const uniqueArray=[]
    for(const items of array){
        if(uniqueArray.includes(items)==false){
            uniqueArray.push(items)
        }
        
    }
    return uniqueArray
    
}
const array = [1, 2,5,8, 3, 4, 5, 6,8]
const hello= Math.max(...array)
console.log(noDuplicate(array))
console.log(hello)