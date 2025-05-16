// Exo 1 - FizzBuzz

let answer = [];

const fizzBuzz = (n) => {

    for(let i = 1; i <= n; i++){
        if(i % 15 === 0){
            answer.push('FizzBuzz')
        } else if (i % 3 === 0){
            answer.push('Fizz')
        } else if (i % 5 === 0){
            answer.push('Buzz')
        } else {
            answer.push(i)
        }
    }

    return answer.map(String)
};

// console.log(fizzBuzz(15));

//  Exo 2 - Two Sum
const numbers1 = [2, 7, 11, 15];
const numbers2 = [3, 2, 4];
const numbers3 = [3, 3];

const target1 = 9;
const target2 = 6;
const target3 = 6;

const twoSum = (numbers, target) => {
    for(let i = 0; i < numbers.length; i++){
        for(let j = 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return [i, j]
            }
        }
    }
}

// console.log(twoSum(numbers1, target1))
