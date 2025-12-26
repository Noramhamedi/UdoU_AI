console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

  /* ================= TIMELINE PRINCIPALE ================= */
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      markers: false
    }
  });

  /* Image : zoom + disparition */
  tl.to(".wrapper img", {
    scale: 2,
    opacity: 0,
    ease: "power1.inOut"
  });

  /* ================= TEXTES : disparition rapide ================= */
  gsap.to(".text-overlay span", {
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "top+=400",
      scrub: true
    },
    opacity: 0,
    y: -20,
    stagger: 0.1,
    ease: "power1.out"
  });

  /* ================= HEADER : FADE IN AU SCROLL ================= */
  gsap.fromTo(
    "header",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "top+=200",
        scrub: true
      },
      ease: "power1.out"
    }
  );
});

/* ================= FIN : cacher le wrapper ================= */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const totalHeight = document.body.scrollHeight;

  const wrapper = document.querySelector(".wrapper");

  if (scrollTop + viewportHeight >= totalHeight) {
    wrapper.style.display = "none";
  } else {
    wrapper.style.display = "block";
  }
});
