function animateTitle() {
    const title = "Yunanca Harf Dönüştürücü";
    const titleElement = document.getElementById('animated-title');
    titleElement.innerHTML = '';

    for (let i = 0; i < title.length; i++) {
        const span = document.createElement('span');
        span.textContent = title[i];
        titleElement.appendChild(span);

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, i * 100);
    }
}

function isGreek(text) {
    const greekRegex = /^[\u0370-\u03FF\u1F00-\u1FFF\s]+$/;
    return greekRegex.test(text);
}

function showError(message) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = message;
    outputElement.style.color = 'red';
    outputElement.style.backgroundColor = '#FFEEEE';
    animateElement(outputElement);
}

function clearError() {
    const outputElement = document.getElementById('output');
    outputElement.style.color = 'black';
    outputElement.style.backgroundColor = '#f9f9f9';
}

function animateElement(element) {
    element.style.animation = 'shake 0.5s';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

function convertToUpperCase() {
    const input = document.getElementById('input').value;
    if (!isGreek(input)) {
        showError('Lütfen sadece Yunanca karakterler girin!');
        return;
    }
    clearError();
    const output = input.toUpperCase();
    animateOutput(output);
}

function convertToLowerCase() {
    const input = document.getElementById('input').value;
    if (!isGreek(input)) {
        showError('Please enter Greek characters only!');
        return;
    }
    clearError();
    const output = input.toLowerCase();
    animateOutput(output);
}

function animateOutput(text) {
    const outputElement = document.getElementById('output');
    outputElement.style.opacity = '0';
    
    setTimeout(() => {
        outputElement.textContent = text;
        outputElement.style.opacity = '1';
    }, 300);
}

function animateBackground() {
    const colors = ['#FFA500', '#FFB52E', '#FFC55C', '#FFD68A', '#FFE7B8'];
    let currentIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 3000);
}

window.onload = function() {
    animateTitle();
    animateBackground();

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-3px)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
        });
    });
};