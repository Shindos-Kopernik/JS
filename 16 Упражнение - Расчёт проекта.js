/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/
// let hour = 80
// let hourWeek = 5 * 5
// let order = 40
// console.log(order < 5 * 9)
// console.log(5 * 9 * 80)

const payRateUSD = 80
const projectHours = 40
const availableHours = (11 - 2) * 9
console.log('Смогу ли я работать? ' + (availableHours > projectHours))
console.log('Стоимость работы ' + projectHours * payRateUSD + '$')