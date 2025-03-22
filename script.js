const toggleBtn = document.querySelector(".toggle")
const toggleRight = document.querySelector(".toggle__right")
const toggleLeft = document.querySelector(".toggle__left")
const body = document.body

document.addEventListener("DOMContentLoaded", () => {
    const modoActual = localStorage.getItem("theme");
  
    if (modoActual === "dark") {
        body.classList.add("darkMode");
        toggleLeft.classList.add("hidden");
        toggleRight.classList.remove("hidden");

        
    } else {
        body.classList.remove("darkMode");
        toggleLeft.classList.remove("hidden");
        toggleRight.classList.add("hidden");
        
    }
  });
  
  toggleBtn.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("darkMode"); 

    // Guarda la preferencia del tema en localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Actualiza los iconos del toggle
    toggleLeft.classList.toggle("hidden", isDarkMode); // Si es oscuro, oculta el sol
    toggleRight.classList.toggle("hidden", !isDarkMode);
  });
