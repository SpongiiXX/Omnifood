const toggleBtn = document.querySelector('#toggleBtn');

toggleBtn.addEventListener('click', () => {
  toggleBtnClick();
});

window.addEventListener('resize', () => {
  closeToggleBtn();
});

document.addEventListener('scroll', () => {
  displaySticky('.section-features', 'nav', 'sticky');
  closeToggleBtn();
  addAnimation('.js--wp-1', 700, 'fadeIn');
  addAnimation('.js--wp-2', 700, 'bounceInUp');
  addAnimation('.js--wp-3', 700, 'bounceInLeft');
  addAnimation('.js--wp-4', 500, 'pulse');
});

function closeToggleBtn() {
  const getElement = document.querySelector('.main-nav');

  if (window.innerWidth <= 767) {
    toggleBtn.name = 'menu';
    getElement.style.display = 'none';
  } else {
    getElement.style.display = 'block';
  }
}

function toggleBtnClick() {
  const toggleBtn = document.querySelector('#toggleBtn');
  const getElement = document.querySelector('.main-nav');

  if (toggleBtn.name == 'menu') {
    toggleBtn.name = 'close';
    getElement.style.display = 'block';
    getElement.classList.add('animated', 'fadeInDown');
  } else {
    toggleBtn.name = 'menu';
    getElement.style.display = 'none';
  }
}

function displaySticky(positionClass, classToAddName, classAdded) {
  const heightY = document.querySelector(positionClass);
  const classToAdd = document.querySelector(classToAddName);

  if (getPosition(heightY) <= 100) {
    classToAdd.classList.add(classAdded);
  } else {
    classToAdd.classList.remove(classAdded);
  }
}

function addAnimation(classToAddName, numberHeight, animation) {
  const classToAdd = document.querySelector(classToAddName);

  if (getPosition(classToAdd) <= numberHeight) {
    classToAdd.classList.add('animated', animation);
    classToAdd.style.opacity = 1;
  }
}

function getPosition(element) {
  let clientRect = element.getBoundingClientRect();
  return clientRect.top + document.body.scrollTop;
}
