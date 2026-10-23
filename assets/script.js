const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
	{
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


// === ÉTAPE 3 : Génération dynamique des bullet points ===

// 1. Récupération du conteneur des points
const dotsContainer = document.querySelector('.dots');

// 2. Création d'un point par slide
slides.forEach((slide, index) => {
    // Création d'un nouvel élément <div>
    const dot = document.createElement('div');

    // Ajout de la classe .dot à tous les points
    dot.classList.add('dot');

    // Ajout de la classe .dot_selected uniquement au premier point (index 0)
    if (index === 0) {
        dot.classList.add('dot_selected');
    }
     // Insertion du point dans le conteneur .dots
    dotsContainer.appendChild(dot);
});

// === ÉTAPE 2 : Rendre les flèches interactives ===

// 1. Récupération des deux flèches dans le DOM
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateCarousel() {
  // Changer l'image
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerImg.alt = slides[index].title;

  // Changer le texte
  bannerText.innerHTML = slides[index].tagLine;

  // Retirer la classe active de tous les points
  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  // Ajouter la classe active au point courant
  dots[index].classList.add("dot_selected");
}

// 2. Event listener sur la flèche gauche
arrowLeft.addEventListener("click", () => {

  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }

  updateCarousel();
});

// 3. Event listener sur la flèche droite
arrowRight.addEventListener("click", () => {

  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  updateCarousel();
});