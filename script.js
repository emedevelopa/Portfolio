const toggleBtn = document.querySelector(".toggle")
const toggleRight = document.querySelector(".toggle__right")
const toggleLeft = document.querySelector(".toggle__left")
const body = document.body

document.addEventListener("DOMContentLoaded", () => {
    const modoActual = localStorage.getItem("theme")
  
    if (modoActual === "light") {
        body.classList.add("lightMode")
        toggleLeft.classList.add("hidden")
        toggleRight.classList.remove("hidden")

        
    } else {
        body.classList.remove("lightMode")
        toggleLeft.classList.remove("hidden")
        toggleRight.classList.add("hidden")
        
    }
  });
  
  toggleBtn.addEventListener("click", () => {
    const isLightMode = body.classList.toggle("lightMode"); 

    localStorage.setItem("theme", isLightMode ? "light" : "dark")

    toggleLeft.classList.toggle("hidden", isLightMode)
    toggleRight.classList.toggle("hidden", !isLightMode)
  })
  