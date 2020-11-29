let sideNav = document.getElementById("mySidenav");
let body = document.querySelector("body");
let navLogo = document.getElementById("navlogoblack");

navLogo.addEventListener('click', openNav)
function openNav() {
 	sideNav.classList.add("open");
 	body.addEventListener('click', closeNav, true);
}


function closeNav() {
  	sideNav.classList.remove("open")
  }

