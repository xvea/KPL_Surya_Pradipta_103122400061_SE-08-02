/**
 * Mengubah angka menjadi fizz, buzz dan fizzbuzz.
 * @param {number} value Bilangan bulat
 * @returns {number | string}
 */
function zzzzOrNum(value) {
    if (typeof value !== "number" || !Number.isInteger(value)) {
        throw new Error("Input harus bilangan bulat");
    }

    if (value % 15 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

/**
 * Mengubah array angka menjadi array hasil FizzBuzz.
 * @param {number[]} sequence Array bilangan bulat
 * @returns {(number | string)[]}
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa array");
    }

    // validasi semua isi array
    sequence.forEach((e) => {
        if (typeof e !== "number" || !Number.isInteger(e)) {
            throw new Error("Semua elemen harus bilangan bulat");
        }
    });

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};