// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Simple hover effect for anime cards
document.querySelectorAll(".movie-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    // Bring to front
    document.querySelectorAll(".movie-card").forEach((c) => {
      c.style.zIndex = "1";
    });
    this.style.zIndex = "10";
  });
});

// Simulate loading more content when scrolling to bottom
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    // In a real app, you would load more content here
    console.log("Loading more anime...");
  }
});

const animes = [
  {
    id: 1,
    title: "Naruto",
    description:
      "Naruto Uzumaki, um jovem ninja com o sonho de se tornar o líder de sua vila e ser reconhecido como um grande ninja. Com determinação e amizade, ele enfrenta desafios para proteger seus amigos e sua vila.",
    heroImage: "images/hero/naruto-hero.jpg",
    cardImage: "images/cards/naruto-card.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Demon Slayer",
    description:
      "Em um Japão da era Taisho, Tanjiro Kamado torna-se um caçador de demônios após sua família ser massacrada e sua irmã mais nova, Nezuko, ser transformada em um demônio.",
    heroImage: "images/hero/demon-slayer-hero.jpg",
    cardImage: "images/cards/demon-slayer-card.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Frieren e a Jornada para o Além",
    description:
      "Após a derrota do Rei Demônio, a maga élfica Frieren inicia uma jornada para entender os humanos e o significado de suas experiências durante sua aventura anterior.",
    heroImage: "images/hero/frieren-hero.jpg",
    cardImage: "images/cards/frieren-card.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Meu Casamento Feliz",
    description:
      "Miyo Saimori casa-se com Kiyoka Kudo em um casamento arranjado. Apesar do início difícil, eles começam a desenvolver sentimentos verdadeiros um pelo outro.",
    heroImage: "images/hero/casamento-feliz-hero.jpg",
    cardImage: "images/cards/casamento-feliz-card.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Diários de uma Apotecária",
    description:
      "Maomao, uma apotecária talentosa, trabalha como serva no palácio imperial. Com seu conhecimento de medicamentos e venenos, ela resolve mistérios e ajuda a proteger a corte.",
    heroImage: "images/hero/apotecaria-hero.jpg",
    cardImage: "images/cards/apotecaria-card.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Yu-Gi-Oh!",
    description:
      "Yugi Muto, um jovem tímido que completa o lendário Quebra-Cabeça do Milênio, passa a compartilhar seu corpo com um espírito misterioso. Juntos, eles enfrentam desafiantes em duelos de cartas mágicas, defendendo seus amigos e desvendando segredos do Antigo Egito.",
    heroImage: "images/hero/yugioh-hero.webp",
    cardImage: "images/cards/yugioh-card.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Dragon Ball Daima",
    description:
      "Goku e seus amigos são transformados em crianças por um desejo misterioso nas Esferas do Dragão. Em sua jornada para reverter o desejo, eles enfrentam novos desafios e descobrem uma conspiração que ameaça a paz do universo.",
    heroImage: "images/hero/daima-hero.jpg",
    cardImage: "images/cards/daima-card.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "Spy x Family",
    description:
      "Um espião, uma assassina e uma telepata formam uma família improvável para uma missão especial. Loid, Yor e Anya Forger precisam manter suas identidades secretas enquanto tentam salvar o mundo e, ao mesmo tempo, vivenciam momentos familiares únicos.",
    heroImage: "images/hero/spy-family-hero.png",
    cardImage: "images/cards/spy-family-card.jpg",
    featured: false,
  },
];

// Função para exibir o anime em destaque
function displayFeaturedAnime() {
  const featuredAnime = animes.find((anime) => anime.featured);
  if (featuredAnime) {
    const hero = document.querySelector(".hero");
    hero.classList.add("loading");

    document.querySelector(".featured-title").textContent = featuredAnime.title;
    document.querySelector(".featured-description").textContent =
      featuredAnime.description;

    // Pré-carrega a imagem de hero antes de exibi-la
    const img = new Image();
    img.onload = function () {
      hero.style.setProperty(
        "--hero-image",
        `url('${featuredAnime.heroImage}')`
      );
      hero.style.background = `
                linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)),
                var(--hero-image)
            `;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center 20%";

      // Remove classe de loading e adiciona classe loaded após um breve delay
      setTimeout(() => {
        hero.classList.remove("loading");
        hero.classList.add("loaded");
      }, 100);
    };
    img.src = featuredAnime.heroImage;
  }
}

// Função para criar os cards de anime
function createAnimeCards() {
  const animeGrid = document.querySelector(".anime-grid");
  animeGrid.innerHTML = "";

  animes.forEach((anime) => {
    const card = document.createElement("div");
    card.className = "anime-card";
    card.innerHTML = `
            <img src="${anime.cardImage}" alt="${anime.title}" />
            <div class="card-overlay">
                <h3>${anime.title}</h3>
                <p>${anime.description.slice(0, 100)}...</p>
                <button>Ver Detalhes</button>
            </div>
        `;

    card.addEventListener("click", () => {
      // Atualiza o anime em destaque quando um card é clicado
      animes.forEach((a) => (a.featured = false));
      anime.featured = true;
      displayFeaturedAnime();
    });

    animeGrid.appendChild(card);
  });
}

// Inicializar a página
document.addEventListener("DOMContentLoaded", () => {
  displayFeaturedAnime();
  createAnimeCards();
});
