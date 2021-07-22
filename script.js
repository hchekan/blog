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
  }
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
//slider
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector),
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper'),
      _sliderItems = _mainElement.querySelectorAll('.slider__item'),
      _sliderBtns = _mainElement.querySelectorAll('.slider__btn'),
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
      _positionLeftItem = 0,
      _transform = 0,
      _step = _itemWidth / _wrapperWidth * 100,
      _items = [];

    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });
    var position = {
      getItemMin: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return _items[position.getItemMin()].position;
      },
      getMax: function () {
        return _items[position.getItemMax()].position;
      }
    }
    var _transformItem = function (direction) {
      var nextItem, ind;
      if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          ind=nextItem;
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
      }
      if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    var _btnClick = function (e) {
      if (e.target.classList.contains('slider__btn')) {
        e.preventDefault();
        var direction = e.target.classList.contains('slider__btn_right') ? 'right' : 'left';
        _transformItem(direction);
      }
    };
    var _setUpListeners = function () { 
      _sliderBtns.forEach(function (item) {
        item.addEventListener('click', _btnClick);
      });
    }

    _setUpListeners();
    return {
      right: function () {
        _transformItem('right');
      },
      left: function () {
        _transformItem('left');
      }
    }
  }
}());
var slider = multiItemSlider('.slider');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
}
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
    bt.classList.remove("backlight");
  });
  but.classList.add("backlight");

  const portfolio__items = document.querySelector('.portfolio__items__container');
  const portfolio__items__images = portfolio__items.querySelectorAll('.portfolio__item');
  const mas = [3,9,1,6,8,4,11,10,2,5,7,0];

  portfolio__items__images.forEach(function(item, i, arr) {
    portfolio__items.appendChild(arr[mas[i]]);
  });
};
//==============================================================================
//==============================================================================
//slider1
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector), 
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper1'), 
      _sliderItems = _mainElement.querySelectorAll('.slider__item1'), 
      _sliderBtns = _mainElement.querySelectorAll('.slider__btn1'),
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), 
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),    
      _positionLeftItem = 0,
      _transform = 0, 
      _step = _itemWidth / _wrapperWidth * 100, 
      _items = [];
    
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });
    var position = {
      getItemMin: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return _items[position.getItemMin()].position;
      },
      getMax: function () {
        return _items[position.getItemMax()].position;
      }
    }
    var _transformItem = function (direction) {
      var nextItem, ind;
      if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          ind=nextItem;
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
      }
      if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';  
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';  
    }
        
    var _btnClick = function (e) {
      if (e.target.classList.contains('slider__btn1')) {
        e.preventDefault();
        var direction = e.target.classList.contains('slider__btn_right1') ? 'right' : 'left';
        _transformItem(direction);
      }
    };
    var _setUpListeners = function () { 
      _sliderBtns.forEach(function (item) {
        item.addEventListener('click', _btnClick);
      });
    }
        
    _setUpListeners();
    return {
      right: function () {
        _transformItem('right');
      },
      left: function () {
        _transformItem('left');
      }
    }
  }
}());
var slider = multiItemSlider('.slider1');
//==============================================================================
//slider2
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector), 
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper2'), 
      _sliderItems = _mainElement.querySelectorAll('.slider__item2'), 
      _sliderBtns = _mainElement.querySelectorAll('.slider__btn2'),
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), 
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),    
      _positionLeftItem = 0,
      _transform = 0, 
      _step = _itemWidth / _wrapperWidth * 100, 
      _items = [];
    
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });
    var position = {
      getItemMin: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return _items[position.getItemMin()].position;
      },
      getMax: function () {
        return _items[position.getItemMax()].position;
      }
    }
    var _transformItem = function (direction) {
      var nextItem, ind;
      if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          ind=nextItem;
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
      }
      if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';  
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';  
    }
        
    var _btnClick = function (e) {
      if (e.target.classList.contains('slider__btn2')) {
        e.preventDefault();
        var direction = e.target.classList.contains('slider__btn_right2') ? 'right' : 'left';
        _transformItem(direction);
      }
    };
    var _setUpListeners = function () { 
      _sliderBtns.forEach(function (item) {
        item.addEventListener('click', _btnClick);
      });
    }
        
    _setUpListeners();
    return {
      right: function () {
        _transformItem('right');
      },
      left: function () {
        _transformItem('left');
      }
    }
  }
}());
var slider = multiItemSlider('.slider2');
//==============================================================================
//slider3
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector), 
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper3'), 
      _sliderItems = _mainElement.querySelectorAll('.slider__item3'), 
      _sliderBtns = _mainElement.querySelectorAll('.slider__btn3'),
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), 
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),    
      _positionLeftItem = 0,
      _transform = 0, 
      _step = _itemWidth / _wrapperWidth * 100, 
      _items = [];
    
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });
    var position = {
      getItemMin: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return _items[position.getItemMin()].position;
      },
      getMax: function () {
        return _items[position.getItemMax()].position;
      }
    }
    var _transformItem = function (direction) {
      var nextItem, ind;
      if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          ind=nextItem;
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
      }
      if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';  
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';  
    }
        
    var _btnClick = function (e) {
      if (e.target.classList.contains('slider__btn3')) {
        e.preventDefault();
        var direction = e.target.classList.contains('slider__btn_right3') ? 'right' : 'left';
        _transformItem(direction);
      }
    };
    var _setUpListeners = function () { 
      _sliderBtns.forEach(function (item) {
        item.addEventListener('click', _btnClick);
      });
    }
        
    _setUpListeners();
    return {
      right: function () {
        _transformItem('right');
      },
      left: function () {
        _transformItem('left');
      }
    }
  }
}());
var slider = multiItemSlider('.slider3');