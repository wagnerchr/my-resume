

// Copy Button text -> email
function copyText(a) {
  navigator.clipboard.writeText(a.textContent)
  .then(function() {
    const copyAlert = document.createElement("div");
    copyAlert.textContent = "Copied text!";
    copyAlert.style.backgroundColor = "green";
    copyAlert.style.color = "white";
    copyAlert.style.padding = "10px";
    copyAlert.style.position = "fixed";
    copyAlert.style.top = "50%";
    copyAlert.style.left = "50%";
    copyAlert.style.transform = "translate(-50%, -50%)";
    copyAlert.style.zIndex = "9999";
    copyAlert.style.fontFamily = "Arial";
    copyAlert.style.fontSize = "16px";
    document.body.appendChild(copyAlert);
    setTimeout(function() {
      document.body.removeChild(copyAlert);
    }, 2000);
  }).catch(function() {
    console.log("Não foi possível copiar o texto.");
  });

}