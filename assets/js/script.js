function fadeInPage() {
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 50);
}

document.addEventListener('DOMContentLoaded', function() {
    fadeInPage();
});