const window_size = 10;
let numbers = [];
const addNumbers = (number) => {
    for(const nums of numbers) {
        if(!numbers.includes(number)) {
            numbers.push(number);
            if(numbers.length > window_size) {
                numbers.shift();
            }
        }
    }
}
const getNumbers = () => {
    return numbers;
} 
const average = () => {
    if(numbers.length === 0) return 0;
    return(numbers.reduce((a,b) => a + b) / numbers.length); 
}

export { addNumbers, getNumbers, average };
 
