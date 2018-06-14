DOCTYPE

// Toggle burger menu

var burgerMenuBtn = document.querySelector('#burgermenu');
var displayMenu = false;

burgerMenuBtn.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu(){
  if(displayMenu === false){
    document.querySelector('#mainav').style.display = "block";
    displayMenu = true;
  } else {
    document.querySelector('#mainav').style.display = "";
    displayMenu = false;
  }
}

// Scroll Navigation

var header = document.querySelector('.header');
var scrollCount = 150;
document.addEventListener('scroll', function(event) {
  if (document.body.scrollTop > 150) {
    header.classList.add("headerHidden");
    if (document.body.scrollTop > scrollCount) {
      scrollCount = document.body.scrollTop;
      header.classList.remove("headerActive");
    } else {
      header.classList.add("headerActive");
      scrollCount = document.body.scrollTop;
    }

  } else  {
    header.classList.remove("headerHidden");
  }
});
