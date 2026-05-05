import express from "express";
import { specs, swaggerUi } from "./swagger.js";

const daftarFilm = [];

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /film:
 *   get:
 *     summary: Mendapatkan daftar film yang pernah ditonton
 *     responses:
 *       200:
 *         description: Daftar film yang pernah ditonton
 *       404:
 *         description: Tidak ada film yang ditemukan
 */
app.get("/film", (req, res) => {
  res.status(200).json(daftarFilm);
});

app.get("/film/:id", (req, res) => {
  const film = daftarFilm.find((f) => f.id === Number(req.params.id));
  if (!film) {
    return res.status(404).json({ message: "Film not found" });
  }
  res.status(200).json(film);
});

app.post("/film", (req, res) => {
  const film = {
    id: daftarFilm.length + 1,
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year,
  };

  daftarFilm.push(film);

  res.status(201).json(film);
});

app.delete("/film/:id", (req, res) => {
  const indeksFilm = daftarFilm.findIndex(
    (f) => f.id === Number(req.params.id),
  );
  if (indeksFilm === -1) {
    return res.status(404);
  }

  const filmDihapus = daftarFilm.splice(indeksFilm, 1);

  res.json(filmDihapus[0]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
