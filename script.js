var sidebar = 0;
function openNav() {
  if (sidebar === 0) {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    sidebar = 1;
  } else if (sidebar === 1) {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      sidebar = 0;
  }
}

// adding marginLeft to cotent based on the width of openbar
var elemWidth = document.getElementById("openbar").clientWidth;
elemWidth = elemWidth - 0.1;
document.querySelector('.content').style.marginLeft= elemWidth + 'px';
