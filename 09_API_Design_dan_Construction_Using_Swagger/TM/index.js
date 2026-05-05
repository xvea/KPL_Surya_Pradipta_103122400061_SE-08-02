const express = require("express");

const app = express();
app.use(express.json());

function hashNama(nama) {
  let hash = 0;

  for (let i = 0; i < nama.length; i++) {
    hash = (hash * 31 + nama.charCodeAt(i)) % 1000000;
  }

  return hash;
}

function getAngkaRahasia(nama) {
  const hash = hashNama(nama);
  return (hash % 100) + 1;
}

app.post("/", (req, res) => {
  const { nama, tebakan } = req.body;

  if (typeof nama !== "string" || typeof tebakan !== "number") {
    return res.status(400).json({
      jawaban: "Format tidak valid",
    });
  }

  if (tebakan < 1 || tebakan > 100) {
    return res.status(400).json({
      jawaban: "Tebakan harus antara 1-100",
    });
  }

  const angkaRahasia = getAngkaRahasia(nama);

  if (tebakan === angkaRahasia) {
    return res.json({
      jawaban: `Benar sekali! Tebakannya adalah ${angkaRahasia}.`,
    });
  } else if (tebakan > angkaRahasia) {
    return res.json({
      jawaban: "Tebakanmu terlalu tinggi!",
    });
  } else {
    return res.json({
      jawaban: "Tebakanmu terlalu rendah!",
    });
  }
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
