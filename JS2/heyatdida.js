let num = prompt("Rəqəm yaz 8329 göndər:");

let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = (num - (num % 10)) / 10;
}
console.log("8329:Sizin rəqəminizin ədədləri cəmi: " + sum);
