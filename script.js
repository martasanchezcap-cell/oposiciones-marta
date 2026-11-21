let totalMinutes = Number(localStorage.getItem("studyMinutes")) || 0;

function updateHours() {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  document.getElementById("hours").textContent =
    hours + " h " + minutes + " min";

  localStorage.setItem("studyMinutes", totalMinutes);
}

function addStudy(minutes) {
  totalMinutes += minutes;
  updateHours();
  alert("¡Muy bien! 🌷 Has sumado " + minutes + " minutos de estudio.");
}

function showSection(section) {
  const extra = document.getElementById("extra");

  if (section === "home") {
    extra.style.display = "none";
    document.querySelector(".welcome").style.display = "block";
    document.querySelector(".progress-card").style.display = "block";
    document.querySelector(".garden-card").style.display = "block";
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".study-card").style.display = "block";
    return;
  }

  document.querySelector(".welcome").style.display = "none";
  document.querySelector(".progress-card").style.display = "none";
  document.querySelector(".garden-card").style.display = "none";
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".study-card").style.display = "none";

  extra.style.display = "block";

  const sections = {
    garden: ["🌷 Mi jardín mágico", "Tu jardín crecerá con cada hora que estudies."],
    temario: ["📚 Mi temario", "Aquí organizaremos tus temas de oposiciones."],
    documents: ["📁 Mis documentos", "Aquí prepararemos tu biblioteca de apuntes."],
    laws: ["⚖️ Legislación", "Tu biblioteca de normativa de Extremadura."],
    tests: ["✏️ Mis tests", "Aquí podrás practicar y registrar tus resultados."],
    cases: ["🧩 Supuestos prácticos", "Tu espacio para preparar casos prácticos."],
    progress: ["📊 Mi progreso", "Tus horas acumuladas: " + totalMinutes + " minutos."]
  };

  const selected = sections[section] || ["Mi espacio", "Próximamente"];

  extra.querySelector("h2").textContent = selected[0];
  extra.querySelector("p").textContent = selected[1];
}

updateHours();

