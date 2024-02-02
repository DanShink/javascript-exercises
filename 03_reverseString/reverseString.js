const reverseString = function(word) {
    if (word.length === 0) {
        return "";
    }
    let result = "";
    for(let i = 0; i < word.length; i++) {
        result += word.charAt(word.length-1-i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
