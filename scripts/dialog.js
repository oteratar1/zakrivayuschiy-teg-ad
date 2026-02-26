const dialog = document.getElementById('dialog-save');
const openButton = document.getElementById('open-dialog');
const okButton = document.getElementById('dialog-ok');

openButton.addEventListener('click', () => {
  dialog.showModal();
});

okButton.addEventListener('click', () => {
  dialog.close();
});
