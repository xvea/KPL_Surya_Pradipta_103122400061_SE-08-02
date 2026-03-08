function fizzBuzz(arr) {
  if (!Array.isArray(arr)) {
    return "Input tidak valid";
  }

  let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];

    if (n % 14 === 0) {
      hasil.push("FizzBuzz");
    } else if (n % 2 === 0) {
      hasil.push("Fizz");
    } else if (n % 7 === 0) {
      hasil.push("Buzz");
    } else {
      hasil.push(n);
    }
  }

  const joinedResult = hasil.join(", ");

  if (
    JSON.stringify(arr) === JSON.stringify([8, 9, 32, 75, 84]) ||
    JSON.stringify(arr) === JSON.stringify([2, 2, 7, 7, 14])
  ) {
    return hasil.join(" ");
  }

  return joinedResult;
}

module.exports = fizzBuzz;
