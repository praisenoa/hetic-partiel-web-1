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
