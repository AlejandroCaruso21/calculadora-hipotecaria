function calcularTotales() {
    let m2Mono = parseFloat(document.getElementById("m2-mono").value) || 0;
    let cantMono = parseInt(document.getElementById("cant-mono").value) || 0;
    let m2MonoPatio = parseFloat(document.getElementById("m2-mono-patio").value) || 0;
    let cantMonoPatio = parseInt(document.getElementById("cant-mono-patio").value) || 0;
    let m2_1dorm = parseFloat(document.getElementById("m2-1dorm").value) || 0;
    let cant_1dorm = parseInt(document.getElementById("cant-1dorm").value) || 0;
    let m2_2dorm = parseFloat(document.getElementById("m2-2dorm").value) || 0;
    let cant_2dorm = parseInt(document.getElementById("cant-2dorm").value) || 0;
    let m2_2dormQuincho = parseFloat(document.getElementById("m2-2dorm-quincho").value) || 0;
    let cant_2dormQuincho = parseInt(document.getElementById("cant-2dorm-quincho").value) || 0;

    let totalM2 = m2Mono + m2MonoPatio + m2_1dorm + m2_2dorm + m2_2dormQuincho;
    let totalCant = cantMono + cantMonoPatio + cant_1dorm + cant_2dorm + cant_2dormQuincho;

    document.getElementById("total-m2").innerText = totalM2.toFixed(2);
    document.getElementById("total-cant").innerText = totalCant;
}

function calcularPrecios() {
    // Cocheras
    let precioCubiertas = parseFloat(document.getElementById("precio-cubiertas").value) || 0;
    let cantCubiertas = parseInt(document.getElementById("cant-cubiertas").value) || 0;
    let precioDescubiertas = parseFloat(document.getElementById("precio-descubiertas").value) || 0;
    let cantDescubiertas = parseInt(document.getElementById("cant-descubiertas").value) || 0;
    let totalCocheras = (precioCubiertas * cantCubiertas) + (precioDescubiertas * cantDescubiertas);
    document.getElementById("precio-total-cocheras").innerText = `USD ${totalCocheras.toLocaleString()}`;

    // Oficinas
    let upDepaOficinas = parseFloat(document.getElementById("up-depa-oficinas").value.replace("%", "")) / 100 || 0;
    let m2Oficinas = parseFloat(document.getElementById("m2-oficinas").value) || 0;
    let precioVentaOficinas = m2Oficinas * upDepaOficinas;
    document.getElementById("precio-venta-oficinas").innerText = `USD ${precioVentaOficinas.toFixed(2)}`;

    // Locales Comerciales
    let upDepaLocales = parseFloat(document.getElementById("up-depa-locales").value.replace("%", "")) / 100 || 0;
    let m2Locales = parseFloat(document.getElementById("m2-locales").value) || 0;
    let precioVentaLocales = m2Locales * upDepaLocales;
    document.getElementById("precio-venta-locales").innerText = `USD ${precioVentaLocales.toFixed(2)}`;

    // Bauleras
    let precioBauleras = parseFloat(document.getElementById("precio-bauleras").value) || 0;
    let cantBauleras = parseInt(document.getElementById("cant-bauleras").value) || 0;
    let totalBauleras = precioBauleras * cantBauleras;
    document.getElementById("precio-total-bauleras").innerText = `USD ${totalBauleras.toLocaleString()}`;
}

function calcularConstruccion() {
    // Amenities
    let deltaTerraza = parseFloat(document.getElementById("delta-terraza").value.replace("%", "")) / 100 || 0;
    let m2Terraza = parseFloat(document.getElementById("m2-terraza").value) || 0;

    // Áreas de circulación
    let deltaCirculacion = parseFloat(document.getElementById("delta-circulacion").value.replace("%", "")) / 100 || 0;
    let m2Circulacion = parseFloat(document.getElementById("m2-circulacion").value) || 0;
    let deltaMaquinas = parseFloat(document.getElementById("delta-maquinas").value.replace("%", "")) / 100 || 0;
    let m2Maquinas = parseFloat(document.getElementById("m2-maquinas").value) || 0;
    let deltaEstacionamiento = parseFloat(document.getElementById("delta-estacionamiento").value.replace("%", "")) / 100 || 0;
    let m2Estacionamiento = parseFloat(document.getElementById("m2-estacionamiento").value) || 0;

    // Construcción
    let inversionM2 = parseFloat(document.getElementById("inversion-m2").value) || 0;
    let anticipo = parseFloat(document.getElementById("anticipo").value) / 100 || 0;
    let obraFinalizada = parseInt(document.getElementById("obra-finalizada").value) || 0;

    // Total Construcción
    let totalConstruccion = (m2Terraza * deltaTerraza + m2Circulacion * deltaCirculacion + m2Maquinas * deltaMaquinas + m2Estacionamiento * deltaEstacionamiento) * inversionM2;
    document.getElementById("total-construccion").innerText = `USD ${totalConstruccion.toLocaleString()}`;

    // Total Anticipo
    let totalAnticipo = totalConstruccion * anticipo;
    document.getElementById("total-anticipo-resultado").innerText = `USD ${totalAnticipo.toLocaleString()}`;

    // Saldo a pagar en cuotas
    let saldoCuotas = totalConstruccion - totalAnticipo;
    document.getElementById("saldo-cuotas").innerText = `USD ${saldoCuotas.toLocaleString()}`;

    // Saldo a pagar en 48 cuotas
    let saldo48Cuotas = obraFinalizada > 0 ? saldoCuotas / obraFinalizada : 0;
    document.getElementById("saldo-48-cuotas").innerText = `USD ${saldo48Cuotas.toFixed(2)}`;

    // Cuota / Total
    let cuotaTotal = totalConstruccion > 0 ? (saldo48Cuotas / totalConstruccion) * 100 : 0;
    document.getElementById("cuota-total").innerText = `${cuotaTotal.toFixed(1)}%`;
}

function actualizarDatos() {
    let dolarMep = "ARS 1,250.50";
    let valorUva = "ARS 350.75";
    document.getElementById("dolar-mep").innerText = dolarMep;
    document.getElementById("uva").innerText = valorUva;
    calcularTotales();
    calcularPrecios();
    calcularConstruccion();
}

window.onload = function() {
    actualizarDatos();
};
