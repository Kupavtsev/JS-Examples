var n = 50; // Сколько элементов хотим получить
var fibonacci = [1, 2]; // Первые два элемента последовательности Фибоначчи

for (i = 2; i < n; i ++) {
  // Получаем i-й элемент последовательности как сумму предыдущих двух
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci.slice(0,n));