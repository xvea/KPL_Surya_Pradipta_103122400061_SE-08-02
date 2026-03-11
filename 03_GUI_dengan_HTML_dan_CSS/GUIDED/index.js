const editorElement = document.getElementById("editor-kecil"); // mengambil elemen HTML berdasarkan id
const charCountElement = document.getElementById("hf");
const bigCharCountElement = document.getElementById("hb");
const smallCharCountElement = document.getElementById("hk");

editorElement.addEventListener("input", (event) => { // mendengarkan event pada elemen dan menjalankan fungsi ketika event terjadi
  const textLength = event.target.value.length;
  charCountElement.textContent = textLength; // menghitung huruf

  bigCharCountElement.textContent = (
    event.target.value.match(/[A-Z]/g) || []
  ).length; // menghitung huruf besar

  smallCharCountElement.textContent = (
    event.target.value.match(/[a-z]/g) || []
  ).length; // menghitung huruf kecil
});
