const fibonacci = function(member) {
    if( member < 0)
    {
        return 'OOPS'
    }
    if( member == 1 || member == 2)
    {
       return 1
    }
    else if(member == 0)
    {
        return 0
    }
    let num1 = num2 = 1
    for(let i = 3 ; i <= member; i++)
    {
        let temp = num2
        num2 = num1 + num2
        if( i == member)
        {
            return num2
        }
        num1 = temp
    }


};

// Do not edit below this line
module.exports = fibonacci;
