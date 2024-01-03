/*
 Вася положил 12000 на вклад 7% годовых с капитализацией 1 раз в месяц.
 Вывести в консоль, сможет ли он купить дом за 13000 через 2 года после снятия
 вклада. И остаток после покупки.

 Итого = Сумма * (1 + ставка с месяц не в %) ^ срок в месяцах.
 */

const money = 12000;
const moneyMounth = money * (1 + 0.07/12) ** 24 
console.log(moneyMounth)
if (moneyMounth < 13500) {
  console.log('Васе не хватает на дом')
} else if (moneyMounth >= 13500) {
  console.log('Хватает на покупку дома')
}
console.log(moneyMounth - 13500)