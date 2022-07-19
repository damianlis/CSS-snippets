// Import stylesheets
import './style.css';

// Write Javascript code!
const boxes = document.querySelectorAll('.box');

const toggleBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((b) => {
    const boxTop = b.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      b.classList.add('show');
      return;
    }
    b.classList.remove('show');
  });
};

window.addEventListener('scroll', toggleBoxes);
