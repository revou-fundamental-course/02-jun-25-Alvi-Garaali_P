document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const pesan = document.getElementById("pesan").value;
  const currentTime = new Date().toString();

  document.getElementById("currentTime").innerText = currentTime;
  document.getElementById("outputNama").innerText = nama;
  document.getElementById("outputTanggal").innerText = tanggal;
  document.getElementById("outputGender").innerText = gender;
  document.getElementById("outputPesan").innerText = pesan;
});
