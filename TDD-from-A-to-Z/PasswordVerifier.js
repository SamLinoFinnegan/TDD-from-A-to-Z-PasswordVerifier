
// Utility functions
const isNotNull = (str) => str;

const hasRightLength = (str) => {
    return str.length;
};

const hasUpperCaseCharacter = (str) => {
    const myStringArr = str.split('');
    const myUpperString = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if (myStringArr[i] == myUpperString[i]) {
            return true;
        }
    } return false
};



const hasLowerCaseCharacter = (str) => {
    const myStringArr = str.split('');
    const myUpperString = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if (myStringArr[i] != myUpperString[i]) {
            return true;
        }
    } return false
};
const hasDigit = (str) => {
    const regex = new RegExp("[0-9]")
    let result = regex.test(str);
    return result
};

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};





