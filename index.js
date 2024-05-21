const form = document.getElementById('formDataDiri');

form.addEventListener('submit', function(event) {
  const inputNama = document.getElementById('inputNama').value;
  const inputDomisili = document.getElementById('inputDomisili').value;
  const hiddeMessage = `Halo saya ${inputNama}, saya dari ${inputDomisili}`;

  document.getElementById('messageAfterSubmit').innerHTML = hiddeMessage;
  event.preventDefault();

})