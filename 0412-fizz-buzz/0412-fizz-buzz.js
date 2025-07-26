/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];

    for(let i = 1; i <= n; i++){
        let currStr = "";

        if(i % 3 == 0 && i % 5 == 0){
            currStr += "FizzBuzz";
        } else if (i % 3 == 0) {
            currStr += "Fizz";
        } else if (i % 5 == 0){
            currStr += "Buzz";
        } else {
            currStr += i
        }

        answer.push(currStr);

    }
    return answer;
};