/**
 * @param {string} deret Deretan bercirikan string
 * @returns {string}
 */
function fizzBuzz(deret) {
  let hasil = "";

  let deretLarik = deret.split(" ");

  for (const elemen of deretLarik) {
    const n = +elemen;
    let fz = "";

    // Fizz
    if (n % 3 === 0) {
      fz += "Fizz";
    }

    // Buzz
    if (n % 5 === 0) {
      fz += "Buzz";
    }

    if (fz != "") {
      hasil += `${fz} `;
      continue;
    }

    hasil += `${n} `;
  }
  return hasil;
}

console.log(fizzBuzz("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15"));
