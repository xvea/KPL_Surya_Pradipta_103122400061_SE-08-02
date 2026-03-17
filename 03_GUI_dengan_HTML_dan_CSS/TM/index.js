const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const bigCharCountElement = document.getElementById("hb");
const smallCharCountElement = document.getElementById("hk");
const btnhb = document.getElementById("huruf-besar");
const btnhk = document.getElementById("huruf-kecil");
const btnhp = document.getElementById("huruf-paragraf");

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
