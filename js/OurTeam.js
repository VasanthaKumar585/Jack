document.addEventListener('DOMContentLoaded', () => {
    const currentBtn = document.getElementById('currentBtn');
    const alumniBtn = document.getElementById('alumniBtn');
    const slider = document.getElementById('slider');
    const alumniSection = document.getElementById('alumni'); 
  
    currentBtn.addEventListener('click', () => {
      slider.style.transform = 'translateX(0)';
      currentBtn.classList.add('active');
      alumniBtn.classList.remove('active');
      alumniSection.style.opacity = '0'; 
      alumniSection.style.visibility = 'hidden'; 
    });
  
    alumniBtn.addEventListener('click', () => {
      slider.style.transform = 'translateX(-50%)';
      alumniBtn.classList.add('active');
      currentBtn.classList.remove('active');
      alumniSection.style.opacity = '1'; 
      alumniSection.style.visibility = 'visible'; 
    });
  });