if (atendenteNaURL) {
    const selectAtendente = document.getElementById("atendente");
    if (selectAtendente) {
        selectAtendente.value = atendenteNaURL;
        selectAtendente.disabled = true;

        // Cria um input hidden com o mesmo valor, pra ser enviado no formulário
        const hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = "atendente";
        hiddenInput.value = atendenteNaURL;
        selectAtendente.closest("form").appendChild(hiddenInput);
    }
    document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
}