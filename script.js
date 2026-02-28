// Menú hamburguesa
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Easter egg en el título
const titulo = document.getElementById("titulo");
const firma = document.getElementById("firma");

titulo.addEventListener("click", () => {
    firma.style.opacity = "1";
});

//animacion de scroll//
const secciones = document.querySelectorAll(".seccion");

function mostrarSecciones() {
    const trigger = window.innerHeight * 0.85;

    secciones.forEach(seccion => {
        const top = seccion.getBoundingClientRect().top;

        if (top < trigger) {
            seccion.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarSecciones)
window.addEventListener("load", mostrarSecciones)



// Destellos dorados al tocar la pantalla
document.addEventListener("touchstart", crearDestello);
document.addEventListener("click", crearDestello);

function crearDestello(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;

    for (let i = 0; i < 3; i++) {
        const destello = document.createElement("span");
        destello.classList.add("destello");

        // Pequeña dispersión tipo estela
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;

        destello.style.left = `${x + offsetX}px`;
        destello.style.top = `${y + offsetY}px`;

        document.body.appendChild(destello);

        setTimeout(() => {
            destello.remove();
        }, 900);
    }
}

const tarjetas = document.querySelectorAll(".tarjeta-momento");

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("activa");
    });
});

const botonFinal = document.getElementById("boton-final");
const mensajeFinal = document.getElementById("mensaje-final");

botonFinal.addEventListener("click", () => {
    mensajeFinal.classList.add("mostrar");
});