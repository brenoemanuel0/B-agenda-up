const urlParams = new URLSearchParams(window.location.search);
const atendenteNaURL = urlParams.get("atendente");

if (atendenteNaURL) {
    const selectAtendente = document.getElementById("atendente");
    if (selectAtendente) {
        selectAtendente.value = atendenteNaURL;
        selectAtendente.disabled = true;

        const hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = "atendente";
        hiddenInput.value = atendenteNaURL;
        selectAtendente.closest("form").appendChild(hiddenInput);
    }
    document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
}