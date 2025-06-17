//first algo to reverse a string

function reverse1(str){
    let reverse = "";

    for(let i = 0; i < str.length; i++){
        reverse = str[i] + reverse;
    }
    return reverse;
}

console.log(reverse1("helloo"))

//second algo to reverse a string

function reverse2(str){
    let reverse = "";

    for(let char of str){
        reverse = char + reverse;
    }
    return reverse;
}

console.log(reverse2("tharindu"))

//inbuilt methods to reverse a string
function reverse3(str){
    const strToArray = str.split("");

    strToArray.reverse()

    return strToArray.join('')
}

console.log(reverse3("i love you"))

