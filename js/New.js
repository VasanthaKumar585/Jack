document.addEventListener('DOMContentLoaded', () => {
    const currentBtn = document.getElementById('currentBtn');
    const alumniBtn = document.getElementById('alumniBtn');
    const currentSection = document.getElementById('currentMembers');
    const alumniSection = document.getElementById('alumni');

    function flipSections() {
        if (currentSection.classList.contains('front')) {
            // Flip to Alumni
            currentSection.style.transform = 'rotateY(-180deg)';
            currentSection.style.opacity = '0';
            alumniSection.style.transform = 'rotateY(0deg)';
            alumniSection.style.opacity = '1';
        } else {
            // Flip to Current Members
            currentSection.style.transform = 'rotateY(0deg)';
            currentSection.style.opacity = '1';
            alumniSection.style.transform = 'rotateY(180deg)';
            alumniSection.style.opacity = '0';
        }
        currentSection.classList.toggle('front');
        alumniSection.classList.toggle('back');
    }

    currentBtn.addEventListener('click', () => {
        if (!currentSection.classList.contains('front')) flipSections();
        currentBtn.classList.add('active');
        alumniBtn.classList.remove('active');
    });

    alumniBtn.addEventListener('click', () => {
        if (!alumniSection.classList.contains('front')) flipSections();
        alumniBtn.classList.add('active');
        currentBtn.classList.remove('active');
    });
});

// Cursor Movement Effect
document.addEventListener("mousemove", function(e) {
    const elements = document.querySelectorAll(".control-box");
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const moveX = Math.min(50, 100 / distance) * dx;
        const moveY = Math.min(50, 100 / distance) * dy;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Pressure Gauge Dynamic Animation
function updatePressure() {
    const needle = document.querySelector(".needle");
    const pressure = Math.random() * 180 - 90; // Random value between -90 and 90
    needle.style.transform = `rotate(${pressure}deg)`;
}

// Update pressure every 2 seconds
setInterval(updatePressure, 2000);

// Initialize Pressure Gauge
updatePressure();

const sidebar = document.querySelector('.sidebar');
const toggleSidebar = (display) => sidebar.style.display = display;

function showSidebar(event) {
    event.preventDefault();
    toggleSidebar('flex');
}

function hideSidebar(event) {
    event.preventDefault();
    toggleSidebar('none');
}