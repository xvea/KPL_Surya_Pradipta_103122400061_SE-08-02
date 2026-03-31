const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const bigCharCountElement = document.getElementById("hb");
const smallCharCountElement = document.getElementById("hk");
const btnhb = document.getElementById("huruf-besar");
const btnhk = document.getElementById("huruf-kecil");
const btnhp = document.getElementById("huruf-paragraf");
const tombolTerang = document.getElementById("tombol-terang");
const tombolGelap = document.getElementById("tombol-gelap");
const tombolSepia = document.getElementById("tombol-sepia");

editorElement.addEventListener("input", (event) => {
  const textLength = event.target.value.length;
  charCountElement.textContent = textLength;
  bigCharCountElement.textContent = (
    event.target.value.match(/[A-Z]/g) || []
  ).length;
  smallCharCountElement.textContent = (
    event.target.value.match(/[a-z]/g) || []
  ).length;
});

btnhb.addEventListener("click", () => {
  editorElement.value = editorElement.value.toUpperCase();
  editorElement.focus();
  editorElement.dispatchEvent(new Event("input"));
});

btnhk.addEventListener("click", () => {
  editorElement.value = editorElement.value.toLowerCase();
  editorElement.focus();
  editorElement.dispatchEvent(new Event("input"));
});

btnhp.addEventListener("click", () => {
  const hp = editorElement.value
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  editorElement.value = hp.join("\n\n");
  editorElement.focus();
  editorElement.dispatchEvent(new Event("input"));
});

function resetModes() {
  document.documentElement.classList.remove("mode-gelap", "mode-sepia");
}

tombolGelap.addEventListener("click", () => {
  resetModes();
  document.documentElement.classList.add("mode-gelap");
});

tombolTerang.addEventListener("click", () => {
  resetModes();
});

tombolSepia.addEventListener("click", () => {
  resetModes();
  document.documentElement.classList.add("mode-sepia");
});