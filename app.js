let son = +prompt("Faqat juft va 2 xonali song kiriting");
if (son >= 10 && son <= 99 && son % 2 == 0) {
  console.log(`Son qabulq qilindi ${son}`);
  alert(`Son qabulq qilindi ${son}`);
} else if (son > 10 && son >= 100) {
  alert(`Son ikki xonali emas: ${son}`);
} else if (son % 2 == 1) {
    console.log("Son juft son emas");
    
  alert(`Son juft son emas: ${son}`);
}
