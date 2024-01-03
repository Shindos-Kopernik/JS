const name = 'Anton'
console.log("hello world", name)
console.log(name)
console.log(
  'shindos'
)
// template and templateMode

const projectName = 'site shop'
const price = 2000
const author = 'Vasiliy Petrov'
const template = author + ' order ' + projectName + ' price $' + price + '$'
console.log(template)

const templateMode = `${author} order ${projectName} price ${price}$`
console.log(templateMode)
