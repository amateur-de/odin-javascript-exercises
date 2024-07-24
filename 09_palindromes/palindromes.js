const palindromes = function (str , start = 0 , end = str.length - 1) {
    if( start <= end)
    {
        let check = str.charCodeAt(start)
        let checkend = str.charCodeAt(end)
        if( str[start] === '' || !( (check >= 48 && check <= 57)|| (check >= 65 && check <= 90)
        || (check >= 97 && check <= 122))   )
        {
            return palindromes(str , start + 1 , end)
        }
        else if( str[end] === '' || !( (checkend >= 48 && checkend <= 57)|| (checkend >= 65 &&
             checkend <= 90)
            || (checkend >= 97 && checkend <= 122)))
        {
            return palindromes(str , start  , end - 1)
        }
        else if( str[start].toLowerCase() === str[end].toLowerCase())
        {
            return palindromes(str , start + 1 , end - 1)
        }
        else if(str[start] !== str[end])
        {
            return false
        }
    }
    else
    {
        return true
    }
    



};


// Do not edit below this line
module.exports = palindromes;
