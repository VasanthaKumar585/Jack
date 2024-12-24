document.addEventListener('DOMContentLoaded', () => {
    const currentBtn = document.getElementById('currentBtn');
    const alumniBtn = document.getElementById('alumniBtn');
    const slider = document.getElementById('slider');

    currentBtn.addEventListener('click', () => {
        slider.style.transform = 'translateX(0)';
        currentBtn.classList.add('active');
        alumniBtn.classList.remove('active');
    });

    alumniBtn.addEventListener('click', () => {
        slider.style.transform = 'translateX(-50%)';
        alumniBtn.classList.add('active');
        currentBtn.classList.remove('active');
    });
});