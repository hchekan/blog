//burger-menu
const sticks = document.querySelector('#contain');
sticks.addEventListener('click', function (e) {
  e.preventDefault();
  const modal = document.querySelector('.burger__nav');

  modal.classList.toggle('block');
  const nav_items = document.querySelector('#nav');
  nav_items.classList.toggle('open');
  sticks.classList.toggle('change');

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.classList.toggle('block');
      nav_items.classList.toggle('open');
      sticks.classList.toggle('change');
    }
  };
});

const burger_links = document.querySelectorAll('.burger__nav__link');
burger_links.forEach(function(link) {
  link.addEventListener('click', function() {
    const modal = document.querySelector('.burger__nav');
    modal.classList.toggle('block');
    const nav_items = document.querySelector('#nav');
    nav_items.classList.toggle('open');
    sticks.classList.toggle('change');
  });
});
//==============================================================================
//переход в полноэкранный режим и наоборот

const expansion__img = document.querySelector('.expansion__img');
expansion__img.onclick = function(event) {
  const img = event.target;
  if (img.tagName !== 'IMG') {
    return;
  }
  img.classList.toggle('expansion');
};

const expansion__img1 = document.querySelector('.expansion__img1');
expansion__img1.onclick = function(event) {
  const img = event.target;
  if (img.tagName !== 'IMG') {
    return;
  }
  img.classList.toggle('expansion');
};

const expansion__img2 = document.querySelector('.expansion__img2');
expansion__img2.onclick = function(event) {
  const img = event.target;
  if (img.tagName !== 'IMG') {
    return;
  }
  img.classList.toggle('expansion');
};

const expansion__img3 = document.querySelector('.expansion__img3');
expansion__img3.onclick = function(event) {
  const img = event.target;
  if (img.tagName !== 'IMG') {
    return;
  }
  img.classList.toggle('expansion');
};
//==============================================================================
const anchors = document.querySelectorAll('a[href*="#"]');
//smooth transition to clicking on the menu
anchors.forEach(function(anchor) {
  anchor.addEventListener('click', function (e) {
    anchors.forEach(function(anch) {
      anch.classList.remove('redcolor');
    });
    e.preventDefault();
    anchor.classList.add('redcolor');
    const blockID = anchor.getAttribute('href');
    var hiddenElement = document.querySelector(blockID);
    hiddenElement.scrollIntoView({block: 'start', behavior: 'smooth'});
  });
});
//==============================================================================
//highlighting a menu item by block
var scrollTop;
window.addEventListener('scroll', function() {
  scrollTop = window.scrollY;
  anchors.forEach(function(anchor) {
    const blockID = anchor.getAttribute('href').substr(1);
    if(scrollTop >= document.querySelector('[id='+blockID+']').offsetTop && blockID !== '') {
      anchors.forEach(function(anch) {
        anch.classList.remove('redcolor');
      });
      anchor.classList.add('redcolor');
    }
  });
});
//==============================================================================
//portfolio images borders
const portfolio__items__container = document.querySelector('.portfolio__items__container');
const imgs_portfolio = document.querySelectorAll('img[class="portfolio__image"]');

portfolio__items__container.onclick = function(event) {
  const img = event.target;
  if (img.tagName !== 'IMG') {
    return;
  }
  imgs_portfolio.forEach(function(im) {
    im.classList.remove('redboxshadow');
  });
  img.classList.add('redboxshadow');
};
//==============================================================================
//portfolio items mix
const button_portfolio = document.querySelector('.portfolio__tags__container');
const buttons_portfolio = document.querySelectorAll('button[class="tag__item effect"]');

button_portfolio.onclick = function(event) {
  const but = event.target;
  if (but.tagName !== 'BUTTON') {
    return;
  }
  buttons_portfolio.forEach(function(bt) {
    bt.classList.remove('backlight');
  });
  but.classList.add('backlight');

  const portfolio__items = document.querySelector('.portfolio__items__container');
  const portfolio__items__images = portfolio__items.querySelectorAll('.portfolio__item');
  const mas = [3,9,1,6,8,4,11,10,2,5,7,0];

  portfolio__items__images.forEach(function(item, i, arr) {
    portfolio__items.appendChild(arr[mas[i]]);
  });
};
//==============================================================================
