let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// animated background

function createBox() {
  let span = document.createElement("span");

  span.classList.add("animated-box");

  let size = Math.random() * 80;

  span.style.height = 40 + size + "px";
  span.style.width = 40 + size + "px";

  span.style.top = Math.random() * innerHeight + "px";
  span.style.left = Math.random() * innerWidth + "px";

  document.querySelector(".gradient-background").appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
}

setInterval(createBox, 400);

// scroll22

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".box");
hiddenElements.forEach((el) => observer.observe(el));

/* start btn up */
let span = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 500) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/* end  btn up */
