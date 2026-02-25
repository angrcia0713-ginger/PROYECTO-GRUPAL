const scriptURL = "https://script.google.com/macros/s/AKfycbwJWFsHTa7OrOsVg7P04CblayhP5ILQAQoOnqOznKhcHchLtPmezVPXnWL0BQSBup5Kwg/exec"; // pega aquí la URL del paso 1
const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const data = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("mensaje").value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(msg => alert(msg))
  .catch(err => console.error(err));

  alert("Formulario enviado");
});