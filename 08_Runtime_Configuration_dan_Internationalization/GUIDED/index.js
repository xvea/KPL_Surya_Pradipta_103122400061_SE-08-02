// ESM
import "dotenv/config";

async function ambilKutipan() {
  try {
    const data = await fetch(process.env.BASE_URL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
}

await ambilKutipan();
