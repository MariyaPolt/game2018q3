window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;

  const manual = document.querySelector("#manual"),
        screenshots = document.querySelector("#screenshots"),
        author = document.querySelector("#author"),
        active = document.querySelector('.navbar-nav .active');
  if (scrolled >= manual.offsetTop && scrolled < screenshots.offsetTop - 10) {
    active.classList.remove('active');
    document.querySelector('a[href="#manual"]').parentElement.classList.add('active');
  } else if (scrolled >= screenshots.offsetTop - 10 && scrolled < author.offsetTop) {
    active.classList.remove('active');
    document.querySelector('a[href="#screenshots"]').parentElement.classList.add('active');
  } else if (scrolled >= author.offsetTop) {
    active.classList.remove('active');
    document.querySelector('a[href="#author"]').parentElement.classList.add('active');
  } else {
    active.classList.remove('active');
    document.querySelector('a[href="#start"]').parentElement.classList.add('active');
  }
});
