const urlParams = new URLSearchParams(window.location.search);
const atendenteNaURL = urlParams.get("atendente");

if (atendenteNaURL) {
    const selectAtendente = document.getElementById("atendente");
    if (selectAtendente) {
        selectAtendente.value = atendenteNaURL;
    }
    document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
}