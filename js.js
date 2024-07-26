document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');
    const output = document.getElementById('output');

    let shouldDisplayNextInput = false; // Flag para controlar o comportamento

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede o comportamento padrão do Enter no input

            if (shouldDisplayNextInput) {
                const input = inputField.value.trim(); // Obtém e limpa o valor do input
                output.innerHTML = `<strong>${input}</strong>`; // Exibe o texto em negrito
                inputField.value = ''; // Limpa o campo de entrada
                shouldDisplayNextInput = false; // Reseta a flag
            } else if (inputField.value.trim() === "/1") {
                inputField.value = ''; // Limpa o campo de entrada
                shouldDisplayNextInput = true; // Define a flag para mostrar o próximo input em negrito
            }
        }
    });
});
