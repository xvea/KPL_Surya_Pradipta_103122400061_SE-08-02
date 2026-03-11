/** Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumlahan dari 1 hingga N. Contohnya, jika N adalah 5, maka fungsi akan mencetak 15 (dalam hal ini menjumlahkan 1 + 2 + 3 + 4 + 5). */

function sumNValues(N) {
  let n = 0;
  for (let i = 1; i <= N; i++) { // i = 1, 2, 3, 4, 5
    n = n + i; // n = 0, 1, 3, 6, 10
  }

  return n;
}

console.log(sumNValues(100));
