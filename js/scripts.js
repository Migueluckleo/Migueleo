document.addEventListener("DOMContentLoaded", function () {
    // Cargar Navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("afterbegin", html);
            initMenu(); // Inicializa el menú después de insertarlo
        })
        .catch(error => console.error("Error cargando la navbar:", error));

    // Cargar Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);
        })
        .catch(error => console.error("Error cargando el footer:", error));
});

function initMenu() {
    document.addEventListener("click", function (event) {
        const menuToggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");

        if (!menuToggle || !mobileMenu) return; // Si no existen, salir

        if (event.target === menuToggle) {
            mobileMenu.classList.toggle("hidden"); // Abre/cierra el menú
        } else if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.add("hidden"); // Cierra el menú si se hace clic fuera
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const blobs = document.querySelectorAll(".blob");
    const container = document.querySelector("section"); // Contenedor donde se mueven los blobs

    function moveBlob(blob) {
        const containerRect = container.getBoundingClientRect();
        
        const maxX = containerRect.width - blob.clientWidth;
        const maxY = containerRect.height - blob.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        const randomScale = 0.9 + Math.random() * 0.4; // Escala entre 0.9 y 1.3

        blob.style.transition = "transform 4s ease-in-out";
        blob.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;

        setTimeout(() => moveBlob(blob), 4000); // Se mueve cada 4 segundos
    }

    blobs.forEach((blob) => moveBlob(blob));
});

