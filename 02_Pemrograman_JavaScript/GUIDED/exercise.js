/** Buatlah sebuah array berisi 3 minuman favorit kalian, dan simpan dalam variabel bernama listMinuman. Setelah itu, ubah 2 element pertama menggunakan notasi kurung dan penugasan 3. Terakhir, tambahkan minuman baru di depan array. */

const listMinuman = ["Susu", "Teh", "Matcha"]; // array

listMinuman[0] = "Kopi"; // mengganti element pertama
listMinuman[1] = "Jus"; // mengganti element kedua

listMinuman.unshift("Teh"); // menambahkan minuman baru di depan

console.log(listMinuman);
