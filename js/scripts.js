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
