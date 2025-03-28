
let currentStep = 1;
const totalSteps = 28; //28
let stepChoices = [];
const choices = [];
let matrix = [
    [0, 1, 1, 0, 0],     // Image 0
    [1, 1, 0, 0, 0],     // Image 1
    [0, 0, 1, 1, 0],     // Image 2
    [0, 1, 1, 0, 0],     // Image 3
    [0, 0, 1, 1, 0],     // Image 4
    [0, 1, 0, 0, 1],    // Image 5     (corrigé dimension 5)
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
    [1, 0, 0, 0, 0],     // Image 16 ( mi a enutre la consciensiosite , pourquoi serait ce lie a un nevrosisme ? non)
    [1, 0, 0, 0, 1],     // Image 17
    [1, 0, 0, 0, -1],    // Image 18
    [0, 0, 1, 1, 0],     // Image 19
    [1, 1, 0, 0, 0],     // Image 20
    [0, -1, 0, 0, 1],    // Image 21
    [0, 0, 0, 0, 1],     // Image 22
    [1, 0, 0, 0, 0],     // Image 23 (l ascene est sociale je vais peut etre devoir changer)
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
    [1, 0, 0, 0, 0],     // Image 69 modifier dans le texte
    [0, 1, 0, 0, 0],     // Image 70
    [0, 0, 0, 1, 0],     // Image 71
    [0, 1, 0, 0, 0],     // Image 72 pareil
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
//document.querySelector(".wrapper").style.display = "none"; // Cache la section animée
updateProgressBar(); 


// Add event listener for back button
  document.getElementById('back-btn').addEventListener('click', () => {
    currentStep = 0;
    stepChoices = [];
    choices.length = 0; // Reset choices
    document.getElementById('back-btn').style.display = 'none';
    document.getElementById('testContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('startTest').style.display = 'block';
    updateProgressBar();
    moveToNextStep();
});

  // Event listener for restarting the test
document.getElementById('restartTestBtn').addEventListener('click', () => {
    currentStep = 0;
    choices.length = 0; // Reset choices
    updateProgressBar(); // Reset progress bar
    moveToNextStep(); // Reset the images and test steps
});

// Event listener for image selection
document.querySelectorAll('.image-selection img').forEach(img => {
    img.addEventListener('click', (e) => {
        const selectedImage = e.target;

        // Ajouter l'image au tableau temporaire si elle n'est pas déjà sélectionnée
        if (!stepChoices.includes(selectedImage.dataset.choice)) {
            stepChoices.push(selectedImage.dataset.choice);

            // Appliquer effet visuel d'opacité
            selectedImage.style.opacity = '0';

            // Masquer complètement l'image après un délai
            setTimeout(() => {
                selectedImage.style.display = 'none';

                // Vérifier combien d'images restent visibles
                const remainingImages = document.querySelectorAll('.image-selection img:not([style*="display: none"])');
                if (remainingImages.length === 1) {
                    // Si une seule image reste, la sélectionner automatiquement
                    const lastImage = remainingImages[0];
                    lastImage.classList.add('selected');
                    stepChoices.push(lastImage.dataset.choice); // Ajouter la dernière image aux choix

                    // Appliquer effet visuel à la dernière image
                    setTimeout(() => {
                        lastImage.style.opacity = '0';
                        setTimeout(() => {
                            // Enregistrer les choix de l'étape dans le tableau global
                            choices.push(...stepChoices);
                            stepChoices = []; // Réinitialiser pour la prochaine étape
                            moveToNextStep(); // Passer à l'étape suivante
                        }, 100);
                    }, 200);
                }
            }, 300);
        }
    });
});


// Function to move to next step
function moveToNextStep() {
    console.log(currentStep);
    console.log("Choices après cette étape :", choices); // Affiche le contenu mis à jour de `choices`


    if (currentStep < totalSteps) {
        currentStep++;
        updateProgressBar();

        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        const image3 = document.getElementById('image3');

        const baseIndex = (currentStep - 1) * 3;
        const path = '../pictures/';
        
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
    const scoresMax = [49, 49, 44, 46, 19];
    const scoresMin = [15, -1, -12, -4, -7];
    let oceanScores = [0, 0, 0, 0, 0]; // [O, C, E, A, N]

    choices.forEach((choice, index) => {
        const imageScores = matrix[choice - 1]; // Retrieve scores from the matrix
        const multiplier = (index % 3 === 0) ? 2 : (index % 3 === 1) ? 1 : 0;
        for (let i = 0; i < oceanScores.length; i++) {
            oceanScores[i] += multiplier * imageScores[i];
        }
    });
    
    // Calculate normalized scores as percentages in the range of possible min/max scores
    let normalizedScores = oceanScores.map((score, index) => {
        // Calculate the user's score as a percentage of the possible range
        const possibleRange = scoresMax[index] - scoresMin[index];
        return Math.round(((score - scoresMin[index]) / possibleRange) * 100);
    });
    
    document.getElementById("resultsContainer").style.display = "block";

    // Display scores and descriptions
    document.getElementById('opennessScore').textContent = normalizedScores[0];
    document.getElementById('conscientiousnessScore').textContent = normalizedScores[1];
    document.getElementById('extraversionScore').textContent = normalizedScores[2];
    document.getElementById('agreeablenessScore').textContent = normalizedScores[3];
    document.getElementById('neuroticismScore').textContent = normalizedScores[4];
    document.getElementById('progressBar1').style.width =  `${normalizedScores[0]}%`;
    document.getElementById('progressBar2').style.width = `${normalizedScores[1]}%`;
    document.getElementById('progressBar3').style.width =`${normalizedScores[2]}%`;
    document.getElementById('progressBar4').style.width = `${normalizedScores[3]}%`;
    document.getElementById('progressBar5').style.width = `${normalizedScores[4]}%`;

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
  let description;

  if (score >= 0 && score < 25) {
      description = "Vous êtes une personne <span class='interactive-word'>pragmatique</span> et attachée à la <span class='interactive-word'>stabilité</span>. Les <span class='interactive-word'>routines familières</span> et les solutions <span class='interactive-word'>éprouvées</span> sont vos alliées. Par exemple, vous trouvez du plaisir à suivre des <span class='interactive-word'>habitudes régulières</span>, comme prendre toujours le même chemin pour aller au travail.";
  } else if (score >= 25 && score < 50) {
      description = "Vous êtes une personne qui trouve un équilibre entre la <span class='interactive-word'>curiosité modérée</span> et le <span class='interactive-word'>pragmatisme</span>. Vous aimez explorer de nouvelles idées à petite échelle, comme essayer un <span class='interactive-word'>nouveau restaurant</span> tout en gardant vos préférences pour des <span class='interactive-word'>activités familières</span>.";
  } else if (score >= 50 && score < 75) {
      description = "Vous êtes une personne <span class='interactive-word'>curieuse</span> et <span class='interactive-word'>créative</span>, appréciant à la fois la <span class='interactive-word'>stabilité</span> et les <span class='interactive-word'>idées nouvelles</span>. Vous pourriez, par exemple, explorer des <span class='interactive-word'>activités artistiques</span> ou discuter de <span class='interactive-word'>concepts innovants</span>, tout en conservant certaines routines réconfortantes.";
  } else if (score >= 75 && score <= 100) {
      description = "Vous êtes une personne <span class='interactive-word'>visionnaire</span> et profondément <span class='interactive-word'>imaginative</span>. Vous recherchez constamment les <span class='interactive-word'>idées originales</span> et les expériences <span class='interactive-word'>non conventionnelles</span>, comme participer à des <span class='interactive-word'>expériences immersives</span> ou vous lancer dans des <span class='interactive-word'>aventures créatives</span>.";
  }
  return description;
}


function getDescriptionForConscientiousness(score) {
let description;

if (score >= 0 && score < 25) {
    description = "Vous êtes une personne qui valorise avant tout la <span class='interactive-word'>spontanéité</span> et la <span class='interactive-word'>liberté</span>. Vous avez une approche <span class='interactive-word'>détendue</span> de la vie, où les règles strictes et la <span class='interactive-word'>discipline rigide</span> ont peu de place. Par exemple, vous préférez improviser vos projets plutôt que de tout planifier à l'avance, et cela vous permet de vous adapter facilement aux imprévus.";
} else if (score >= 25 && score < 50) {
    description = "Vous êtes une personne qui aime trouver un équilibre entre la <span class='interactive-word'>flexibilité</span> et une certaine dose d'<span class='interactive-word'>organisation</span>. Vous suivez des plans simples mais n'hésitez pas à changer de direction si une opportunité ou un imprévu se présente. Par exemple, vous pourriez planifier vaguement vos vacances tout en laissant de la place à des décisions spontanées.";
} else if (score >= 50 && score < 75) {
    description = "Vous êtes une personne <span class='interactive-word'>organisée</span> et <span class='interactive-word'>pragmatique</span>, sans être trop rigide. Vous aimez fixer des <span class='interactive-word'>objectifs</span> clairs et travailler méthodiquement pour les atteindre. Par exemple, vous planifiez votre journée avec des listes de tâches, mais vous êtes aussi capable de réajuster si nécessaire. Votre <span class='interactive-word'>discipline</span> et votre sens des priorités vous aident à gérer efficacement vos responsabilités.";
} else if (score >= 75 && score <= 100) {
    description = "Vous êtes une personne extrêmement <span class='interactive-word'>disciplinée</span>, avec un sens aigu de la <span class='interactive-word'>rigueur</span> et de la <span class='interactive-word'>responsabilité</span>. Vous planifiez tout dans les moindres détails, que ce soit pour un projet professionnel ou personnel. Par exemple, vous aimez organiser vos finances avec précision ou préparer un emploi du temps détaillé pour maximiser votre productivité. Vous êtes quelqu'un de <span class='interactive-word'>fiable</span>, et les autres se tournent souvent vers vous pour vos qualités de <span class='interactive-word'>gestionnaire</span>.";
}

return description;
}


function getDescriptionForExtraversion(score) {
let description;

if (score >= 0 && score < 25) {
    description = "Vous êtes une personne qui privilégie la <span class='interactive-word'>solitude</span> et les environnements <span class='interactive-word'>calmes</span>. Vous trouvez votre énergie dans des moments de <span class='interactive-word'>réflexion personnelle</span> ou dans des activités paisibles comme lire un livre ou écouter de la musique douce. Les grandes <span class='interactive-word'>foules</span> et les interactions sociales trop intenses peuvent parfois vous sembler <span class='interactive-word'>épuisantes</span>, et vous préférez les éviter autant que possible.";
} else if (score >= 25 && score < 50) {
    description = "Vous êtes une personne qui apprécie à la fois les moments de <span class='interactive-word'>tranquillité</span> et les interactions sociales en petit groupe. Vous vous sentez bien dans des cadres <span class='interactive-word'>intimistes</span>, où vous pouvez engager des conversations significatives, mais sans être le centre de l’attention. Par exemple, vous aimez passer une soirée tranquille avec des amis proches plutôt qu'assister à des événements bruyants ou bondés.";
} else if (score >= 50 && score < 75) {
    description = "Vous êtes une personne sociable et pleine d'<span class='interactive-word'>enthousiasme</span>. Vous aimez participer à des <span class='interactive-word'>événements</span> ou rencontrer de nouvelles personnes, mais vous savez aussi apprécier des moments de calme pour vous recentrer. Par exemple, vous pouvez passer un week-end à faire la fête, suivi d’une journée de repos chez vous. Votre équilibre entre sociabilité et introspection vous rend <span class='interactive-word'>flexible</span> dans les environnements sociaux.";
} else if (score >= 75 && score <= 100) {
    description = "Vous êtes une personne naturellement <span class='interactive-word'>énergique</span> et <span class='interactive-word'>charismatique</span>. Les interactions sociales sont une véritable source de <span class='interactive-word'>plaisir</span> pour vous, et vous aimez être au centre de l'attention. Par exemple, vous vous épanouissez lors de fêtes animées, de discussions en groupe ou même en prenant la parole en public. Votre <span class='interactive-word'>confiance</span> et votre <span class='interactive-word'>enthousiasme</span> sont contagieux, et les autres sont naturellement attirés par votre présence.";
}

return description;
}


function getDescriptionForAgreeableness(score) {
let description;

if (score >= 0 && score < 25) {
    description = "Vous êtes une personne qui valorise avant tout l'<span class='interactive-word'>authenticité</span> et la défense de vos <span class='interactive-word'>convictions personnelles</span>. Vous êtes direct(e) dans vos échanges et n’avez pas peur d’exprimer des opinions qui peuvent aller à l’encontre de la majorité. Par exemple, dans un débat, vous êtes souvent celui ou celle qui n'hésite pas à poser des questions difficiles ou à challenger les idées des autres. Votre approche peut être perçue comme <span class='interactive-word'>compétitive</span>, mais elle reflète votre désir de rester fidèle à vous-même.";
} else if (score >= 25 && score < 50) {
    description = "Vous êtes une personne qui cherche à équilibrer vos <span class='interactive-word'>opinions personnelles</span> avec le besoin de maintenir des <span class='interactive-word'>relations harmonieuses</span>. Par exemple, vous pouvez défendre votre point de vue dans une discussion, mais vous savez aussi quand il est préférable de faire des compromis pour éviter les conflits. Vous appréciez les échanges respectueux et recherchez un juste milieu entre l’<span class='interactive-word'>affirmation</span> de soi et la <span class='interactive-word'>coopération</span>.";
} else if (score >= 50 && score < 75) {
    description = "Vous êtes une personne <span class='interactive-word'>bienveillante</span> et <span class='interactive-word'>coopérative</span>, mais sans négliger vos propres besoins. Vous accordez une grande importance à l'<span class='interactive-word'>harmonie</span> dans vos relations et faites des efforts pour éviter les malentendus ou les tensions. Par exemple, vous êtes souvent celui ou celle qui propose des solutions équilibrées dans un conflit, cherchant à satisfaire toutes les parties tout en restant fidèle à vos principes.";
} else if (score >= 75 && score <= 100) {
    description = "Vous êtes une personne profondément <span class='interactive-word'>empathique</span> et <span class='interactive-word'>altruiste</span>. Vous êtes toujours prêt(e) à écouter les autres, à offrir votre <span class='interactive-word'>soutien</span>, et à privilégier l’<span class='interactive-word'>harmonie</span> dans vos relations. Par exemple, vous n’hésitez pas à mettre vos propres besoins de côté pour aider un ami en difficulté ou résoudre un conflit dans votre entourage. Votre <span class='interactive-word'>gentillesse</span> et votre <span class='interactive-word'>compréhension</span> font de vous une personne de confiance, sur laquelle vos proches peuvent toujours compter.";
}

return description;
}


document.addEventListener("DOMContentLoaded", () => {
  const interactiveWords = document.querySelectorAll(".interactive-word");

  interactiveWords.forEach(word => {
    // Create a rating bar for each word
    const ratingBarContainer = document.createElement("div");
    ratingBarContainer.classList.add("rating-bar-container");
    ratingBarContainer.classList.add("hidden");

    const dislikeEmoji = document.createElement("span");
    dislikeEmoji.classList.add("emoji");
    dislikeEmoji.textContent = "👎";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 0;
    slider.max = 100;
    slider.value = 50;

    const likeEmoji = document.createElement("span");
    likeEmoji.classList.add("emoji");
    likeEmoji.textContent = "👍";

    ratingBarContainer.appendChild(dislikeEmoji);
    ratingBarContainer.appendChild(slider);
    ratingBarContainer.appendChild(likeEmoji);

    // Add the rating bar to the DOM
    word.parentNode.insertBefore(ratingBarContainer, word.nextSibling);

    // Show the rating bar on hover
    word.addEventListener("mouseover", () => {
      ratingBarContainer.classList.remove("hidden");
      ratingBarContainer.classList.add("active");
    });

    // Hide the rating bar when the mouse leaves both the word and the bar
    word.addEventListener("mouseout", () => {
      ratingBarContainer.classList.remove("active");
      ratingBarContainer.classList.add("hidden");

    });
  });
});

function getDescriptionForNeuroticism(score) {
let description;

if (score >= 0 && score < 25) {
    description = "Vous êtes une personne <span class='interactive-word'>extrêmement stable</span> sur le plan émotionnel. Même face à des défis majeurs ou des imprévus, vous gardez votre <span class='interactive-word'>sang-froid</span> et votre <span class='interactive-word'>confiance</span>. Par exemple, dans une situation de crise, vous êtes souvent celui ou celle qui rassure les autres et propose des solutions pratiques. Votre capacité à rester <span class='interactive-word'>imperturbable</span> fait de vous un véritable pilier pour ceux qui vous entourent.";
} else if (score >= 25 && score < 50) {
    description = "Vous êtes une personne <span class='interactive-word'>équilibrée</span> sur le plan émotionnel, capable de gérer le stress tout en restant <span class='interactive-word'>réaliste</span>. Bien que vous puissiez parfois ressentir de l’inquiétude, vous ne vous laissez pas facilement submerger par les émotions négatives. Par exemple, vous pourriez être un peu nerveux(se) avant un événement important, mais vous trouvez rapidement des moyens de vous <span class='interactive-word'>recentrer</span> et de rester productif(ve).";
} else if (score >= 50 && score < 75) {
    description = "Vous êtes une personne <span class='interactive-word'>sensible</span> et <span class='interactive-word'>introspective</span>, souvent touchée par les hauts et les bas de la vie. Vous pouvez être sujet(te) à des moments de <span class='interactive-word'>stress</span> ou de doute, mais vous êtes également très conscient(e) de vos émotions et celles des autres. Par exemple, dans une situation stressante, vous pourriez avoir besoin de temps pour vous apaiser, mais cela vous aide aussi à mieux comprendre vos propres besoins et à soutenir les autres.";
} else if (score >= 75 && score <= 100) {
    description = "Vous êtes une personne très <span class='interactive-word'>émotive</span> et <span class='interactive-word'>sensible</span> aux variations de votre environnement. Les situations stressantes ou les conflits peuvent souvent vous <span class='interactive-word'>affecter profondément</span>, et vous êtes sujet(te) à des moments d'<span class='interactive-word'>anxiété</span>. Cependant, cette sensibilité vous rend aussi incroyablement <span class='interactive-word'>introspectif(ve)</span> et attentif(ve) aux émotions des autres, ce qui peut faire de vous un(e) confident(e) exceptionnel(le) et un(e) excellent(e) allié(e) pour ceux qui ont besoin d’un soutien émotionnel.";
} else {
    description = "Score invalide. Veuillez entrer un score compris entre 0 et 100.";
}

return description;
}


