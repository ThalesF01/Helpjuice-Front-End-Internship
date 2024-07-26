document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const spanHeader = document.getElementById('spanHeader');
    const spanText = document.getElementById('spanText');
    const title = document.getElementById('title');
    const text = document.getElementById('text');
    const tooltip = document.getElementById('tooltip');

    let nextTitle = false;

    // Event input
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (nextTitle) {
                const titleText = input.value.trim();
                if (title) {
                    title.innerHTML = `<h1>${titleText}</h1>`;
                }
                input.value = '';
                nextTitle = false;
                input.placeholder = 'Type / for blocks, @ to link docs or people';
                input.classList.remove('bold-placeholder');
            } else if (input.value.trim() == "/1") {
                input.value = '';
                nextTitle = true;
                input.placeholder = 'Heading 1';
                input.classList.add('bold-placeholder');
            } else {
                if (text) {
                    text.innerHTML = input.value;
                }
                input.value = '';
            }
        }
    });

    // Event click span to Header
    spanHeader.addEventListener('click', function() {
        input.value = '';
        nextTitle = true;
        input.placeholder = 'Heading 1';
        input.classList.add('bold-placeholder');
    });

    // Event click span to Text
    spanText.addEventListener('click', function() {
        nextTitle = false;
        input.placeholder = 'Type / for blocks, @ to link docs or people';
        input.classList.remove('bold-placeholder');
    });

    // Event to show tooltip
    input.addEventListener('focus', function() {
        if (tooltip) {
            tooltip.classList.add('show');
        }
    });

    // Event to close tooltip
    input.addEventListener('blur', function() {
        if (tooltip) {
            tooltip.classList.remove('show');
        }
    });
});
