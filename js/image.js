const FILE_TYPES = ['.gif', '.jpg', '.jpeg', '.png'];
const fileChooserImage = document.querySelector('.container-place__image-place');
const previewImage = document.querySelector('.container-place__preview-image');
let file;

fileChooserImage.addEventListener('change', () => {
  file = fileChooserImage.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      previewImage.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

export {previewImage, file};