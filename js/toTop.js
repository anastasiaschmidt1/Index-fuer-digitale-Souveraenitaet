const button = document.querySelector('#to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

button.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
