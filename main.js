// HAMBURGER NAV
function toggleClick() {
    const toggleSideBar = document.querySelector('.ham-bar')
    if (toggleSideBar.style.display === "block") {
        toggleSideBar.style.display = "none";
      } else {
        toggleSideBar.style.display = "block";
      }
}