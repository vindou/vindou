function toggleDropdown(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.dropdown-arrow');
    const section = element.querySelector('h2').textContent;

    if (!content.classList.contains('expanded')) {
        content.style.height = 'auto';
        const height = content.scrollHeight;
        content.style.height = '0px';
        content.offsetHeight;
        content.classList.add('expanded');
        content.style.height = height + 'px';
        localStorage.setItem(section, 'expanded');
    } else {
        content.style.height = content.scrollHeight + 'px';
        content.offsetHeight;
        content.style.height = '0px';
        content.classList.remove('expanded');
        localStorage.removeItem(section);
    }

    arrow.classList.toggle('expanded');
}

function initializeDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const header = dropdown.querySelector('.dropdown-header');
        const content = dropdown.querySelector('.dropdown-content');
        const arrow = dropdown.querySelector('.dropdown-arrow');
        const section = dropdown.querySelector('h2').textContent;

        if (localStorage.getItem(section) === 'expanded') {
            content.style.height = 'auto';
            const height = content.scrollHeight;
            content.style.height = height + 'px';
            content.classList.add('expanded');
            arrow.classList.add('expanded');
        }
    });
}

function fadeInPage() {
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 50);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeDropdowns();
    fadeInPage();
});