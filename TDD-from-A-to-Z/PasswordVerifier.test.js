const myPasswordFunction = require("./PasswordVerifier.js");

const passwords = ["henkie1", "1234a", "z", "henkie1234", "HENKhenk", "HENK33$", "1234", ""];

test('The password is not null', () => {
    expect(myPasswordFunction.isNotNull('myPassword')).toBeTruthy()
})

test('The password is not grater than 9', () => {
    expect(myPasswordFunction.hasRightLength('myPass')).toBeLessThan(9)
})

test('password has 1 or more uppercase characters ', () => {
    expect(myPasswordFunction.hasUpperCaseCharacter('myPASS')).toBe(true)
})
test('password has 1 or more lowercase characters', () => {
    expect(myPasswordFunction.hasLowerCaseCharacter('MYPaSS')).toBe(true)
})
test('password has 1 or more digits', () => {
    expect(myPasswordFunction.hasDigit('MYPAS12321321S')).toBe(true)

})

test("Password should meet 3 requirements ", () => {
    const pass = "testings";
    const toCheck = [];
    toCheck.push(myPasswordFunction.isNotNull(pass),
        myPasswordFunction.hasRightLength(pass),
        myPasswordFunction.hasUpperCaseCharacter(pass),
        myPasswordFunction.hasLowerCaseCharacter(pass),
        myPasswordFunction.hasDigit(pass))

    expect(myPasswordFunction.minimumConditionsReached(toCheck)).toBeTruthy();
});

test("passwordVerifier test ", () => {
    const tested = passwords.map(password => {
        return myPasswordFunction.verifyPassword(password)
    })

    const expected = [true, true, true, true, true, false, false, false];

    expect(tested).toEqual(expected)
})