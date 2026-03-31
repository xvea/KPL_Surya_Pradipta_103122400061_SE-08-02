function hitung(str, tipe) {
  let jumlah = 0;

  for (const c of str) {
    if (tipe === "semua") {
      jumlah++;
    } else if (tipe === "huruf") {
      if (c !== " ") {
        jumlah++;
      }
    }
  }

  if (tipe === "semua" || tipe === "huruf") {
    return jumlah;
  }

  return;
}

module.exports = hitung;
