function updateDate() {
    const dateElements = document.querySelectorAll('.italic');
    const currentDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    dateElements.forEach(element => {
        if (element.textContent.includes('Edited') && element.textContent.includes('©')) {
            element.innerHTML = `Edited ${formattedDate}<br>© 2020–${currentDate.getFullYear()} Gilbert Chang.`;
        }
    });
}

function fadeInPage() {
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 50);
}

document.addEventListener('DOMContentLoaded', function() {
    updateDate();
    fadeInPage();
});