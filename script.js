const uploadBox = document.querySelector('.upload-wrapper')
const uploadZone = document.querySelector('.upload-zone');
const resetBtn = document.querySelector('#reset-btn');
const inputFile = document.querySelector('#input-file');
const fileName = document.querySelector('.file-name');
const fileSize = document.querySelector('.file-size');

const handleOnChange = (file) => {
  fileName.textContent = file.name;
  fileSize.textContent = (file.size / 1024).toFixed(2) + "KB"
}

inputFile.addEventListener("change", (e) => handleOnChange(e.target.files[0]))
uploadBox.addEventListener("submit", (e) => e.preventDefault())

uploadBox.addEventListener("reset", () => {
  fileName.textContent = "No File Uploaded";
  fileSize.textContent = "0.00 KB"
})

uploadZone.addEventListener('dragenter', () => uploadZone.classList.add('is-dragging'));
uploadZone.addEventListener('dragover', (e) => e.preventDefault());
uploadZone.addEventListener('dragleave', (e) => {
  if (!uploadZone.contains(e.relatedTarget)) {
    uploadZone.classList.remove('is-dragging');
  }
});

uploadZone.addEventListener("drop", (e) => {
  e.preventDefault()
  uploadZone.classList.remove('is-dragging')
  handleOnChange(e.dataTransfer.files[0])
})