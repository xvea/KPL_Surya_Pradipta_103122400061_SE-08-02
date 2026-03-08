/** Buatlah sebuah array berisi 3 minuman favorit kalian, dan simpan dalam variabel bernama listMinuman. Setelah itu, ubah 2 element pertama menggunakan notasi kurung dan penugasan 3. Terakhir, tambahkan minuman baru di depan array. */

const listMinuman = ["Susu", "Teh", "Matcha"];

listMinuman[0] = "Kopi";
listMinuman[1] = "Jus";

listMinuman.unshift("Teh");

console.log(listMinuman);
