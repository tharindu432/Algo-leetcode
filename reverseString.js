//first algo to reverse a string

function reverse(str){
    let reverse = "";

    for(let i = 0; i < str.length; i++){
        reverse = str[i] + reverse;
    }
    return reverse;
}

console.log(reverse("helloo"))

//second algo to reverse a string

function reverse(str){
    let reverse = "";

    for(let char of str){
        reverse = char + reverse;
    }
    return reverse;
}

console.log(reverse("tharindu"))

//inbuilt methods to reverse a string
function reverse(str){
    const strToArray = str.split("");

    strToArray.reverse()

    return strToArray.join('')
}

console.log(reverse("i love you"))

