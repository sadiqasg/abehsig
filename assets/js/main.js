const change = src => {
  document.getElementById('main').src = src
}

const get = (selector) => document.querySelector(selector);

const menu = get(".dropdown-menu");
const menuBtn = get(".dropdown-toggle");
const closeBtn = get(".close");

closeBtn.addEventListener("click", function () {
  closeBtn.setAttribute('style', 'display:none !important');
  menu.classList.remove("show");
});


setInterval(() => {
  if (menuBtn.classList.contains('show')) {
    closeBtn.setAttribute('style', 'display:block !important');
  }
}, 1000);
