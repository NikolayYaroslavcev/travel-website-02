const navBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

navBtn.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("close");
        navLinks.classList.remove("open");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.add("close");
  navLinks.addEventListener(
    "animationend",
    (e) => {
      navLinks.classList.remove("close");
      navLinks.classList.remove("open");
    },
    { once: true }
  );
});


const explore = document.querySelector(".explore_wrapper_inner");

const exploreContent = Array.from(explore.children);

exploreContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  explore.appendChild(duplicateNode);
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});

const faq = document.querySelector(".faq_grid");

faq.addEventListener("click", (e) => {
  const target = e.target;
  const faqHeader = target.closest(".faq_header");
  const faqCard = target.closest(".faq_card");

  if (faqHeader && faqCard) {
    if (faqCard.classList.contains("active")) {
      faqCard.classList.remove("active");
    } else {
      Array.from(faq.children).forEach((item) => {
        item.classList.remove("active");
      });
      faqCard.classList.add("active");
    }
  }
});
