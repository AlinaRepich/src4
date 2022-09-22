/*
let user = {
    name: 'John',
    age: 30,
    'likes birds': true
};
alert(user.name);
alert(user.age);
alert(user['likes birds'])
*/
//-----------------------------
/*
const user = {
    name: 'John'
};

user.name = 'Pete';

alert(user.name);
*/
//------------------------------
/*
let user = {
    name: 'John',
    age: 30
};

let key = prompt('Какую информацию вы хотите узнать о пользователе?', 'name');

alert(user[key]);
*/
//-------------------------------
/*
let fruit = prompt('Какой фрукт купить?','apple');

let bag = {
    [fruit]:5
};  

alert(bag.apple);
*/
//--------------------------------
/*
function makeUser(name,age){
    return{
        name,
        age
    };
}

let user = makeUser('John',30);
alert(user.name);
*/
//-------------------------------
/*let obj = {
    for: 1,
    let: 2,
    return: 3
};

alert(obj.for + obj.let + obj.return);
*/
//-------------------------------
/*
let user = { age: 30,
    name: 'Peter'
 };

let key = 'name';
alert( 'name' in user );
*/
//-------------------------------
/*
let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};

for (let key in user){
    alert(key);
    alert(user[key]);
}
*/
//-----------------------
//Задача1 Привет, object
/*
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Peter';
delete user.name;
*/
//Задача2 Проверка на пустоту
/*
function isEmpty(obj) {
    for (let key in obj){
        return false;
    }
    return true;
}
*/
//Задача3 Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
 let sum = 0;
 for (let key in salaries) {
     sum += salaries[key];
 }

alert(sum);