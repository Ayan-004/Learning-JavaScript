const accountId = 14432
let accountEmail = "ayyanjsk@gmail.com"
var accountPassword = "1234"
accountCity = "Mumbai"
let accountState;

// accountId = 123009 //not allowed

accountEmail = "ayyanshaikh47@gmail.com"
accountPassword = "09876"
accountCity = "Kalyan"

/*
Prefer not to use 'var'
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])