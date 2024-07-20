const repeatString = function(string , num) {
    if(num < 0)
    {
        return `ERROR`
    }
    let result = ''
    for(let number = 0 ; number < num ; number = number + 1)
    {
        result += string
    }
    return result

};

// Do not edit below this line
module.exports = repeatString;
