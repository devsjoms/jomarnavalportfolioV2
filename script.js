function myFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";  
  } else {
    nav.className = "topnav";        
  }
}

// auto close on click
document.querySelectorAll('.topnav a:not(.icon)').forEach(link => {
  link.addEventListener('click', () => {
    var nav = document.getElementById("myTopnav");
    nav.classList.remove("responsive");
  });
});

