// template and templateMode

const projectName = 'site shop'
const price = 2000
const author = 'Vasiliy Petrov'
const template = author + ' order ' + projectName + ' price $' + price + '$'
console.log(template)

const templateMode = `${author} order ${projectName} price ${price}$`
console.log(templateMode)

const template2 = 'project \n' + 'price: ' + price + '$';
console.log(template2)

const templateMode2 = `project 
price: ${price}$`
  console.log(templateMode2)
 
// Convertion type
const age = '18'
console.log(Number(age) + 5)
console.log(age - 3) // 15; Неявное преобразование типов.
const userName = 'Vasya'
console.log(Number(userName) + 5) // NaN
console.log(typeof NaN) // Number
console.log(String(4) + 7) // 47
console.log(Boolean(0)) // false
console.log(Boolean(-1)) // true, все числа кроме нуля true.
console.log(Boolean('')) // false полезная фича
console.log(Boolean('') + 10) // 10
console.log(true + 2) // 3

// Convertion Boolean
// false

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('Vasya')));
console.log(Boolean(NaN));
