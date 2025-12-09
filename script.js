// Simple reveal animation for sections when page loads
document.addEventListener('DOMContentLoaded', function(){
  const sections = document.querySelectorAll('.section');
  sections.forEach((s, i) => {
    setTimeout(() => s.classList.add('show'), 120 * i);
  });
});

// Optional: keyboard shortcut P to print quickly
document.addEventListener('keydown', function(e){
  if ((e.key === 'p' || e.key === 'P') && (e.ctrlKey || e.metaKey)) {
    return;
  }
});

// Animate circular skill bars
document.addEventListener('DOMContentLoaded', function() {
  const skills = document.querySelectorAll('.skill');

  function animateSkills() {
    skills.forEach(skill => {
      const rect = skill.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50 && !skill.classList.contains('animated')) {
        skill.classList.add('animated');
        const percent = skill.dataset.percent;
        const circle = skill.querySelector('.progress');
        const text = skill.querySelector('.skill-text');
        let offset = 314; // circumference for r=50
        let progress = 0;
        const interval = setInterval(() => {
          if(progress >= percent) {
            clearInterval(interval);
            progress = percent;
          }
          const dashoffset = offset - (offset * progress / 100);
          circle.style.strokeDashoffset = dashoffset;
          text.innerHTML = `${skill.dataset.skill} <br>${progress}%`;
          progress++;
        }, 20);
      }
    });
  }

  animateSkills();
  window.addEventListener('scroll', animateSkills);
});
