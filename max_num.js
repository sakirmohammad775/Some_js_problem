function maxNum(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max
}
const array = [1, 2, 3, 4, 5];
console.log(array)
const maxFromArray = maxNum(array)
console.log(maxFromArray)
