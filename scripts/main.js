const targetDate = new Date("04/29/2024 00:00:00").getTime();

// Actualizar el contador cada segundo
const interval = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calcular días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el contador en el elemento con id "countdown"
  document.getElementById("countdown").innerHTML = `
    <p class="col-12 col-lg-2 py-2 mx-auto rounded-pill" style="background-color: blueviolet;">${days} Días</p>
    <p class="col-12 col-lg-2 py-2 mx-auto rounded-pill" style="background-color: blueviolet;">${hours} Horas</p>
    <p class="col-12 col-lg-2 py-2 mx-auto rounded-pill" style="background-color: blueviolet;">${minutes} Minutos</p>
    <p class="col-12 col-lg-2 py-2 mx-auto rounded-pill" style="background-color: blueviolet;">${seconds} Segundos</p>
  `;

  // Si el contador llega a cero, detener la actualización
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "¡Ya ha llegado el momento!";
  }
}, 1000);