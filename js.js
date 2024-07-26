    document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');

    let nextTitle = false; 

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 

            if (nextTitle) {
                const titleText = input.value.trim(); 
                title.innerHTML = `<h1>${titleText}</h1>`; 
                input.value = ''; 
                nextTitle = false; 
                input.placeholder = 'Type / for blocks, @ to link docs or people';
                input.classList.remove('bold-placeholder');
            } else if (input.value.trim() === "/1") {
                input.value = ''; 
                nextTitle = true; 
                input.placeholder = 'Heading 1';
                input.classList.add('bold-placeholder');
            } else{
                text.innerHTML = input.value;
                input.value = ''; 
            }
        }
    });
});