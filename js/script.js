function generateQR() {
  const qrText = document.getElementById("qrText").value.trim();
  const qrCodeDiv = document.getElementById("qrCode");

  if (!qrText) {
    qrCodeDiv.innerHTML = "<p style='color:white;'>⚠️ Please enter something.</p>";
    return;
  }

  qrCodeDiv.innerHTML = "";

  QRCode.toCanvas(qrText, { width: 200 }, function (err, canvas) {
    if (err) {
      console.error(err);
      qrCodeDiv.innerHTML = "<p style='color:red;'>Something went wrong.</p>";
      return;
    }
    qrCodeDiv.appendChild(canvas);
  });
}
