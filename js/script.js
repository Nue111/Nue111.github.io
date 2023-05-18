// toggle kelas active

const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu diklik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luat=r sidebar untuk menghilangkan sidebarnya

const hamberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
