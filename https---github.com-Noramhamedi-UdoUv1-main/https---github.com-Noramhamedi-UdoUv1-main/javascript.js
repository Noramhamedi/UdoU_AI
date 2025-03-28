console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // Timeline for main animations
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top", // Animation starts immediately
        end: "+=150%", // Overall timeline duration
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      opacity: 0, // Fade out as it zooms in
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
        onComplete: showStartPage, // Show Start page after animation
      },
      "<"
    );


});

// Quick disappearance animation for text
gsap.to(".text-overlay span", {
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top", // Start fading as soon as scrolling starts
    end: "top+=100", // Finish fading quickly (100px scroll distance)
    scrub: true, // Smooth fade tied to scrolling
    markers: false // Enable markers for debugging
  },
  opacity: 0, // Fully fade out
  y: -20, // Small upward movement
  ease: "power1.inOut", // Smooth easing
  stagger: 0.1 // Quick stagger between each text element
});
function showStartPage () {
  let currentStep = 1;
  const totalSteps = 1; //28
  const choices = [];
  let matrix = [
      [0, 1, 1, 0, 0],     // Image 0
      [1, 1, 0, 0, 0],     // Image 1
      [0, 0, 1, 1, 0],     // Image 2
      [0, 1, 1, 0, 0],     // Image 3
      [0, 0, 1, 1, 0],     // Image 4
      [0, 1, 0, 0, -1],    // Image 5
      [1, 0, 0, 0, -1],    // Image 6
      [1, 0, 0, 0, 0],     // Image 7
      [1, 0, 1, 0, 0],     // Image 8
      [0, 1, 0, 0, 0],     // Image 9
      [1, 0, 0, 0, 0],     // Image 10
      [1, 0, 1, 1, 0],     // Image 11
      [0, 0, 0, 0, 1],     // Image 12
      [0, -1, 0, 1, 0],    // Image 13
      [0, 1, 0, 0, 0],     // Image 14
      [0, 0, 0, 1, 0],     // Image 15
      [1, 1, 0, 0, 1],     // Image 16
      [1, 0, 0, 0, 1],     // Image 17
      [1, 0, 0, 0, -1],    // Image 18
      [0, 0, 1, 1, 0],     // Image 19
      [1, 1, 0, 0, 0],     // Image 20
      [0, -1, 0, 0, 1],    // Image 21
      [0, 0, 0, 0, 1],     // Image 22
      [1, 0, 0, 0, 0],     // Image 23
      [0, 0, -1, 0, 1],    // Image 24
      [0, 0, 0, -1, 1],    // Image 25
      [0, 0, 0, 0, 1],     // Image 26
      [0, 0, 1, -1, 0],    // Image 27
      [1, 0, -1, 0, 1],    // Image 28
      [0, -1, 0, 0, 0],    // Image 29
      [0, -1, 0, 0, 0],    // Image 30
      [0, 0, 1, -1, 1],    // Image 31
      [0, 0, 1, 1, 0],     // Image 32
      [0, 0, 1, 1, 0],     // Image 33
      [0, 0, 0, 1, 0],     // Image 34
      [0, 1, 1, 0, 0],     // Image 35
      [1, 1, -1, 0, -1],   // Image 36
      [0, 1, 0, 0, -1],    // Image 37
      [1, 0, 1, 1, -1],    // Image 38
      [0, 1, 0, 1, 0],     // Image 39
      [0, 1, -1, 0, -1],   // Image 40
      [1, 1, -1, 0, -1],   // Image 41
      [0, 1, 0, 1, 0],     // Image 42
      [1, 0, 1, 1, 0],     // Image 43
      [0, 1, 1, 0, 0],     // Image 44
      [0, 1, 1, 1, 0],     // Image 45
      [1, 0, 0, 0, 0],     // Image 46
      [1, 0, 1, 1, 0],     // Image 47
      [0, 0, 1, -1, 0],    // Image 48
      [1, 0, -1, 0, 0],    // Image 49
      [0, 0, 0, 0, 1],     // Image 50
      [0, 1, 0, 0, 0],     // Image 51
      [1, 0, 0, 0, 0],     // Image 52
      [0, 0, 0, 1, 0],     // Image 53
      [1, 0, 0, 1, 0],     // Image 54
      [0, 0, 1, 1, 0],     // Image 55
      [0, 1, 0, 0, 0],     // Image 56
      [0, 1, 1, 0, 0],     // Image 57
      [0, 1, 1, 0, 0],     // Image 58
      [0, 0, 0, 1, 0],     // Image 59
      [1, 1, -1, 0, 0],    // Image 60
      [1, 0, 0, 1, 0],     // Image 61
      [1, 1, 0, 0, 0],     // Image 62
      [0, -1, 0, 0, 0],    // Image 63
      [0, 1, 1, -1, 0],    // Image 64
      [0, 0, 0, 0, 1],     // Image 65
      [1, 1, 0, 0, 0],     // Image 66
      [0, 0, 0, 1, 0],     // Image 67
      [1, 0, 1, 1, 0],     // Image 68
      [1, 0, 0, 0, 0],     // Image 69
      [0, 1, 0, 0, 0],     // Image 70
      [0, 0, 0, 1, 0],     // Image 71
      [0, 1, 0, 0, 0],     // Image 72
      [0, 0, 1, 1, 0],     // Image 73
      [1, 1, -1, 0, -1],   // Image 74
      [1, 1, -1, 0, -1],   // Image 75
      [1, 1, 0, 0, 0],     // Image 76
      [1, 0, 0, 0, 0],     // Image 77
      [0, 0, 0, 1, 0],     // Image 78
      [0, 0, 1, 1, 0],     // Image 79
      [1, 1, 0, 0, 0],     // Image 80
      [0, 0, -1, 0, 1],    // Image 81
      [0, -1, 0, 0, 1],    // Image 82
      [0, 0, 1, 0, 1]      // Image 83
  ];
  const body = document.body;
  
  // Add event listener for starting the test
  document.getElementById('startTestBtn').addEventListener('click', () => {
      document.getElementById('back-btn').style.display = 'block';
      document.getElementById('startTest').style.display = 'none';
      document.getElementById('testContainer').style.display = 'block';
      body.classList.remove('bg-image');
      body.classList.add('no-bg');
      updateProgressBar();
  });
  
  // Add event listener for back button
  document.getElementById('back-btn').addEventListener('click', () => {
      document.getElementById('back-btn').style.display = 'none';
      document.getElementById('testContainer').style.display = 'none';
      document.getElementById('resultsContainer').style.display = 'none';
      document.getElementById('startTest').style.display = 'block';
      body.classList.remove('no-bg');
      body.classList.add('bg-image');
      updateProgressBar();
  });
  
  // Event listener for image selection
  document.querySelectorAll('.image-selection img').forEach(img => {
      img.addEventListener('click', (e) => {
          e.target.style.opacity = '0';
          setTimeout(() => {
              e.target.style.display = 'none';
              const remainingImages = document.querySelectorAll('.image-selection img:not([style*="display: none"])');
              if (remainingImages.length === 1) {
                  const lastImage = remainingImages[0];
                  lastImage.classList.add('selected');
                  setTimeout(() => {
                      lastImage.style.opacity = '0';
                      setTimeout(() => {
                          moveToNextStep();
                      }, 300);
                  }, 500);
              }
          }, 300);
      });
  });
  
  // Function to move to next step
  function moveToNextStep() {
      console.log(currentStep);
      const selectedImage = document.querySelector('.image-selection img.selected');
      if (selectedImage) {
          choices.push(selectedImage.dataset.choice);
      }
  
      if (currentStep < totalSteps) {
          currentStep++;
          updateProgressBar();
  
          const image1 = document.getElementById('image1');
          const image2 = document.getElementById('image2');
          const image3 = document.getElementById('image3');
  
          const baseIndex = (currentStep - 1) * 3;
          const path = '../UdoU/pictures/';
          
          image1.src = `${path}${baseIndex}.webp`;
          image1.alt = `Option ${baseIndex + 1}`;
          image1.dataset.choice = baseIndex + 1;
          image1.style.display = 'inline-block';
          image1.style.opacity = '1';
  
          image2.src = `${path}${baseIndex + 1}.webp`;
          image2.alt = `Option ${baseIndex + 2}`;
          image2.dataset.choice = baseIndex + 2;
          image2.style.display = 'inline-block';
          image2.style.opacity = '1';
  
          image3.src = `${path}${baseIndex + 2}.webp`;
          image3.alt = `Option ${baseIndex + 3}`;
          image3.dataset.choice = baseIndex + 3;
          image3.style.display = 'inline-block';
          image3.style.opacity = '1';
  
          document.querySelectorAll('.image-selection img').forEach(img => img.classList.remove('selected'));
      } else {
          showResults();
      }
  }
  
  // Function to update progress bar
  function updateProgressBar() {
      const progress = (currentStep / totalSteps) * 100;
      document.getElementById('progressBar').style.width = `${progress}%`;
  }
  
  // Function to show results and calculate scores
  function showResults() {
      let oceanScores = [0, 0, 0, 0, 0]; // [O, C, E, A, N]
  
      choices.forEach((choice, index) => {
          const imageScores = matrix[choice - 1]; // Retrieve scores from matrix
          for (let i = 0; i < oceanScores.length; i++) {
              oceanScores[i] += imageScores[i];
          }
      });
  
      // Normalize scores to a scale of 0 to 100
      let normalizedScores = oceanScores.map(score => {
          return Math.round(((score + totalSteps) / (2 * totalSteps)) * 100);
      });
  
      document.getElementById("resultsContainer").style.display = "block";
  
      // Display scores and descriptions
      document.getElementById('opennessScore').textContent = normalizedScores[0];
      document.getElementById('conscientiousnessScore').textContent = normalizedScores[1];
      document.getElementById('extraversionScore').textContent = normalizedScores[2];
      document.getElementById('agreeablenessScore').textContent = normalizedScores[3];
      document.getElementById('neuroticismScore').textContent = normalizedScores[4];
  
      // Add descriptions based on scores
      document.getElementById('opennessDesc').innerHTML = getDescriptionForOpenness(normalizedScores[0]);
      document.getElementById('conscientiousnessDesc').innerHTML = getDescriptionForConscientiousness(normalizedScores[1]);
      document.getElementById('extraversionDesc').innerHTML = getDescriptionForExtraversion(normalizedScores[2]);
      document.getElementById('agreeablenessDesc').innerHTML = getDescriptionForAgreeableness(normalizedScores[3]);
      document.getElementById('neuroticismDesc').innerHTML = getDescriptionForNeuroticism(normalizedScores[4]);
  
      // Hide test container and show results
      document.getElementById('restartTestBtn').style.display = 'none';
      document.getElementById('testContainer').style.display = 'none';
      document.getElementById('resultsContainer').style.display = 'block';
  }
  
  // Functions for generating descriptions in French
  function getDescriptionForOpenness(score) {
      const description = score >= 50 ? 
          "Vous êtes une personne qui aime explorer de nouveaux <span class='interactive-word'>horizons</span>, que ce soit dans vos pensées, vos activités ou vos <span class='interactive-word'>intérêts</span>. Votre <span class='interactive-word'>curiosité</span> est votre boussole, et vous vous sentez constamment attiré(e) par les <span class='interactive-word'>idées nouvelles</span>, les expériences <span class='interactive-word'>non conventionnelles</span>  et les découvertes créatives." :
          "Vous êtes une personne qui préfère la <span class='interactive-word'>stabilité</span> et la sécurité des idées éprouvées. Le confort de la <span class='interactive-word'>routine</span> et des expériences familières vous apporte une sensation de <span class='interactive-word'>contrôle</span> et de tranquillité.";
      return description;
      }
  
  function getDescriptionForConscientiousness(score) {
      return score >= 50 ? 
          "Vous êtes une personne extrêmement <span class='interactive-word'>organisée</span> et <span class='interactive-word'>méthodique</span>, toujours prête à planifier, fixer des objectifs et les atteindre avec une grande discipline. Vous aimez que les choses soient bien structurées, et vous faites attention aux détails dans tout ce que vous entreprenez. Votre capacité à rester concentré(e) sur vos tâches, même dans des situations difficiles, vous rend particulièrement fiable. Vous êtes quelqu'un sur qui on peut compter pour respecter les délais et tenir vos engagements. Votre rigueur et votre sens des responsabilités vous permettent souvent de réussir là où d'autres peinent à suivre." : 
          "Vous êtes une personne qui préfère la spontanéité et la flexibilité dans votre approche de la vie. Plutôt que de suivre un plan rigide, vous vous laissez guider par l'inspiration du moment. Vous pouvez parfois paraître désorganisé(e), mais votre capacité à improviser et à vous adapter aux circonstances est une de vos forces. Les règles strictes et les délais serrés ne vous conviennent pas toujours, et vous vous épanouissez davantage dans des environnements où vous avez la liberté de faire les choses à votre manière, sans contraintes. Vous appréciez de vivre dans l'instant, et vous n'êtes pas gêné(e) par le fait que tout ne soit pas toujours sous contrôle.";
      }
  
  function getDescriptionForExtraversion(score) {
      return score >= 50 ? 
          "Vous êtes une personne énergique et dynamique, qui adore être au cœur de l’action. Les interactions sociales vous apportent une source de plaisir et d’énergie, et vous appréciez d’être entouré(e) de monde. Que ce soit lors de fêtes, de discussions en groupe ou de rencontres spontanées, vous vous épanouissez dans des environnements où vous pouvez exprimer votre enthousiasme et votre esprit sociable. Vous êtes naturellement porté(e) vers les autres, et votre présence est souvent remarquée grâce à votre charisme et votre assurance. Vous êtes quelqu'un qui n'hésite pas à prendre les devants et à attirer l'attention dans les situations sociales" : 
          "Vous êtes une personne qui préfère les environnements calmes et les interactions en petit comité. Le bruit et l’agitation des grandes <span class='interactive-word'>foules</span>  peuvent parfois vous épuiser, et vous vous sentez plus à l’aise lorsque vous avez du temps pour vous, dans un cadre tranquille. Plutôt que de rechercher des relations sociales à tout prix, vous appréciez les moments de réflexion et de <span class='interactive-word'>solitude</span> , où vous pouvez vous ressourcer. Vous êtes attentif(ve) à la qualité de vos relations, privilégiant des conversations profondes et significatives plutôt que des discussions superficielles. Vous savez apprécier le silence et n'avez pas besoin de vous imposer pour vous sentir à l’aise.";
  }
  
  function getDescriptionForAgreeableness(score) {
      return score >= 50 ? 
          "Vous êtes une personne empathique et bienveillante, toujours prête à <span class='interactive-word'>écouter</span>  les autres et à offrir votre soutien. Les conflits ne vous attirent pas, et vous préférez favoriser l’harmonie dans vos relations. La gentillesse, la coopération et la compréhension sont des valeurs importantes pour vous. Vous vous mettez souvent à la place des autres, cherchant à maintenir des liens positifs et à éviter les malentendus. Vous inspirez confiance, et vos proches savent qu’ils peuvent compter sur vous pour être à leurs côtés dans les moments difficiles." : 
          "Vous êtes une personne qui accorde une grande importance à vos propres opinions et valeurs. Plutôt que de vous laisser influencer par les autres ou d’essayer de plaire, vous préférez défendre ce en quoi vous croyez, même si cela implique des désaccords. Vous n’avez pas peur de dire ce que vous pensez, même si cela va à contre-courant de l’opinion générale. Cela peut vous rendre parfois perçu(e) comme étant plus direct(e) ou compétitif(ve), mais vous savez que l’authenticité est plus importante que l’approbation sociale. Vous êtes plus orienté(e) vers vos propres objectifs que vers le besoin d’apaiser les autres.";
  }
  
  function getDescriptionForNeuroticism(score) {
      return score >= 50 ? 
          "Vous êtes une personne très sensible aux émotions, et vous ressentez fortement les hauts et les bas de la vie. Les situations stressantes peuvent parfois vous affecter profondément, et vous avez tendance à vous inquiéter ou à douter plus facilement que d'autres. Cependant, cette sensibilité vous permet aussi d'être particulièrement en phase avec vos propres émotions et celles des autres. Vous pouvez être sujet(te) à l’anxiété ou à des moments d’insécurité, mais cela vous pousse aussi à être introspectif(ve) et à chercher des moyens d’améliorer votre bien-être." : 
          "Vous êtes une personne calme et stable sur le plan émotionnel. Même face à des situations stressantes, vous gardez votre sang-froid et êtes rarement submergé(e) par l’inquiétude ou les émotions négatives. Votre résilience naturelle vous permet de rester serein(e) lorsque d'autres pourraient paniquer. Vous avez confiance en vous et en votre capacité à gérer les imprévus sans perdre votre équilibre. Cette stabilité fait de vous un soutien solide pour ceux qui vous entourent, car vous savez comment garder les choses en perspective.";
  }
  
  // Event listener for restarting the test
  document.getElementById('restartTestBtn').addEventListener('click', () => {
      currentStep = 1;
      choices.length = 0; // Reset choices
      document.getElementById('startTest').style.display = 'none';
      document.getElementById('resultsContainer').style.display = 'none';
      document.getElementById('testContainer').style.display = 'block';
      updateProgressBar(); // Reset progress bar
      moveToNextStep(); // Reset the images and test steps
  });
  document.addEventListener("DOMContentLoaded", function () {
      const words = document.querySelectorAll(".interactive-word");
      const ratingBar = document.getElementById("rating-bar");
      const slider = document.getElementById("slider");
  
      if (!ratingBar || words.length === 0 || !slider) {
          console.error("Élément introuvable");
          return;
      }
  
      words.forEach(word => {
          word.addEventListener("mouseenter", function (event) {
              const rect = word.getBoundingClientRect();
              ratingBar.style.left = `${rect.left}px`;
              ratingBar.style.top = `${rect.bottom + window.scrollY + 10}px`;
              ratingBar.classList.add("active");
          });
  
          word.addEventListener("mouseleave", function () {
              ratingBar.classList.remove("active");
          });
      });
  
      slider.addEventListener("input", function () {
          const value = slider.value;
          const dislikeEmoji = document.querySelector(".dislike");
          const likeEmoji = document.querySelector(".like");
          dislikeEmoji.classList.toggle("active", value < 50);
          likeEmoji.classList.toggle("active", value >= 50);
      });
  });
  ;
}