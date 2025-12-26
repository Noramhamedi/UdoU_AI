console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // Timeline for main animations
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=300%", // Se termine quand .wrapper sort complètement du viewport
      pin: true, // Épingle la section pendant le défilement
      scrub: true, // Synchronise avec le défilement
      markers: false
    }
  });

  // Animation des images
  timeline.to(".wrapper img", {
    scale: 2,
    z: 0,
    opacity: 0,
    transformOrigin: "center center",
    ease: "power1.inOut",
  });
});

// Quick disappearance animation for text
gsap.to(".text-overlay span", {
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top", // Start fading as soon as scrolling starts
    end: "top+=400", // Finish fading quickly (100px scroll distance)
    scrub: true, // Smooth fade tied to scrolling
    markers: false // Enable markers for debugging
  },
  opacity: 0, // Fully fade out
  y: -20, // Small upward movement
  ease: "power1.inOut", // Smooth easing
  stagger: 0.1 // Quick stagger between each text element
});

gsap.to("header", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "top+=200",
    scrub: true,
    markers: false
  },
  ease: "power1.out"
});

  gsap.to("#startTest", {
    scrollTrigger: {
      trigger: ".wrapper", // La zone où le défilement commence
      start: "top center", // Début de l'animation
      end: "top top", // Fin de l'animation
      scrub: true // Synchronise avec le défilement
    },
    y: "-200", // Monte le titre de 100 pixels
    ease: "power1.out", // Doucement pour un effet naturel
  });
  gsap.to("#resultsContainer", {
    scrollTrigger: {
      trigger: ".wrapper", // La zone où le défilement commence
      start: "top center", // Début de l'animation
      end: "top top", // Fin de l'animation
      scrub: true // Synchronise avec le défilement
    },
    y: "-200", // Monte le titre de 100 pixels
    ease: "power1.out", // Doucement pour un effet naturel
  });
  gsap.to("#testContainer", {
    scrollTrigger: {
      trigger: ".wrapper", // La zone où le défilement commence
      start: "top center", // Début de l'animation
      end: "top top", // Fin de l'animation
      scrub: true // Synchronise avec le défilement
    },
    y: "-200", // Monte le titre de 100 pixels
    ease: "power1.out", // Doucement pour un effet naturel
  });
  window.addEventListener("scroll", () => {
    // Obtenir la position actuelle de défilement et la hauteur totale
    const scrollTop = window.scrollY; // Position actuelle de défilement (haut de la page)
    const viewportHeight = window.innerHeight; // Hauteur visible de la fenêtre
    const totalHeight = document.body.scrollHeight; // Hauteur totale de la page
  
    // Vérifier si l'utilisateur a atteint la fin du défilement
    if (scrollTop + viewportHeight >= totalHeight) {
            // Cache la section animée et affiche la page interactive
      document.querySelector(".wrapper").style.display = "none"; // Cache la section animée
    }
    else {
            document.querySelector(".wrapper").style.display = "block"; 

    } 
  });