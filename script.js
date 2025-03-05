function actualizarDatos() {
    // Simulación de datos (luego lo reemplazaremos con scraping real)
    let dolarMep = "ARS 1,250.50"; // Valor estático de ejemplo
    let valorUva = "ARS 350.75";   // Valor estático de ejemplo

    // Actualiza el HTML
    document.getElementById("dolar-mep").innerText = dolarMep;
    document.getElementById("uva").innerText = valorUva;
}

// Carga los datos al iniciar la página
window.onload = actualizarDatos;