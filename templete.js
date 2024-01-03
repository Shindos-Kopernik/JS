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
