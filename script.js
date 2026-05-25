const plants = [

    {
        name: "Monstera",
        scientific: "Monstera deliciosa",
        care: "Bright indirect light, water weekly",
        difficulty: "medium",
        image: "monstera.jpg"
    },

    {
        name: "Snake Plant",
        scientific: "Dracaena trifasciata",
        care: "Low light tolerant, water every 2–3 weeks",
        difficulty: "easy",
        image: "snake-plant.avif"
    },

    {
        name: "ZZ Plant",
        scientific: "Zamioculcas zamifolia",
        care: "Very low maintenance, water monthly",
        difficulty: "easy",
        image: "zz-plant.webp"
    },

    {
        name: "Pothos Plant",
        scientific: "Epipremnum aureum",
        care: "Thrives in most light conditions",
        difficulty: "easy",
        image: "pothos-pant.webp"
    },

    {
        name: "Prayer Plant",
        scientific: "Maranta leuconeura",
        care: "Medium light, keep soil moist",
        difficulty: "medium",
        image: "prayer-plant.jpg"
    },

    {
        name: "String of Pearls",
        scientific: "Curio rowleyanus",
        care: "Bright light, low watering",
        difficulty: "hard",
        image: "string-of-pearls-plant.jpg"
    },

    {
        name: "Peace Lily",
        scientific: "Spathiphyllum.",
        care: "Low to medium light, moist soil",
        difficulty: "medium",
        image: "peace-lily.webp"
    },

    {
        name: "Spider Plant",
       scientific: "Chlorophytum comosum",
        care: "Bright indirect light, easy care",
        difficulty: "easy",
        image: "spider-plant.webp"
    },

    {
        name: "Jade Plant",
        scientific: "Crassula ovata",
        care: "Needs sunlight, water sparingly",
        difficulty: "easy",
        image: "jade-plant.jpg"
    },

    {
        name: "Tulips",
        scientific: "Tulipa gesneriana",
        care: "Cool temperature and sunlight",
        difficulty: "medium",
        image: "tulips.webp"
    },

    {
        name: "Hibiscus",
        scientific: "Hibiscus rosa-sinensis",
        care: "Full sunlight and regular watering",
        difficulty: "medium",
        image: "hibiscus.jpg"
    },

    {
        name: "Marigold",
        scientific: "Tagetes",
        care: "Full sunlight, moderate watering",
        difficulty: "easy",
        image: "marigold.jpg"
    },

    {
        name: "Mogra",
        scientific: "Jasminum sambac",
        care: "Warm climate and sunlight",
        difficulty: "medium",
        image: "mogra.webp"
    },

    {
        name: "Tulsi",
        scientific: "Ocimum sanctum",
        care: "Daily sunlight and watering",
        difficulty: "easy",
        image: "tulsi.webp"
    },

    {
        name: "Bougainvillea",
        scientific: "Bougainvillea",
        care: "Full sunlight, drought tolerant",
        difficulty: "medium",
        image: "bougainvillia.jpg"
    },

    {
        name: "Roses",
        scientific: "Rosa",
        care: "Direct sunlight and pruning",
        difficulty: "hard",
        image: "roses.jpg"
    },

    {
        name: "Cast Iron Plant",
        scientific: "Aspidistra elatio",
        care: "Very hardy indoor plant",
        difficulty: "easy",
        image: "cast-iron.jpeg"
    },

    {
        name: "Orchids",
        scientific: "Orchidaceae",
        care: "Bright indirect light and weekly watering",
        difficulty: "medium",
        image: "orchids.jpg"
    },

    {
        name: "Bamboo",
        scientific: "Bambusa vulgaris",
        care: "Keep in indirect light and fresh water",
        difficulty: "easy",
        image: "bamboo.webp"
    },

    {
        name: "Money Plant",
        scientific: "Epipremnum aureum",
        care: "Low maintenance and grows in indirect light",
        difficulty: "easy",
        image: "money-plant.webp"
    }

];

const featuredPlants =
    document.getElementById("featuredPlants");

const allPlants =
    document.getElementById("allPlants");

const searchInput =
    document.getElementById("searchInput");

const filterSelect =
    document.getElementById("filterSelect");

/* CREATE CARD */

function createPlantCard(plant) {

    return `

        <div class="plant-card" onclick='openModal(${JSON.stringify(plant)})'>

            <div class="plant-image">

                <img
                    src="${plant.image}"
                    alt="${plant.name}"
                >

            </div>

            <div class="plant-content">

                <h3 class="plant-name">
                    ${plant.name}
                </h3>

                <p class="plant-care">
                    ${plant.care}
                </p>

                <span class="difficulty-badge ${plant.difficulty}">
                    ${plant.difficulty}
                </span>

            </div>

        </div>

    `;
}

/* FEATURED PLANTS */

function renderFeaturedPlants() {

    const featured =
        plants.slice(0, 6);

    featuredPlants.innerHTML =
        featured
        .map(createPlantCard)
        .join("");
}

/* ALL PLANTS */

function renderAllPlants(filteredPlants = plants) {

    allPlants.innerHTML =
        filteredPlants
        .map(createPlantCard)
        .join("");
}

/* FILTER */

function filterPlants() {

    const query =
        searchInput.value.toLowerCase();

    const difficulty =
        filterSelect.value;

    const filteredPlants = plants.filter(plant => {

        const matchesSearch =
            plant.name
            .toLowerCase()
            .includes(query);

        const matchesDifficulty =
            difficulty === "all" ||
            plant.difficulty === difficulty;

        return matchesSearch &&
               matchesDifficulty;
    });

    renderAllPlants(filteredPlants);
}

/* SCROLL BUTTON */

function scrollToPlants() {

    document
        .getElementById("plants")
        .scrollIntoView({
            behavior: "smooth"
        });
}

/* EVENT LISTENERS */

searchInput.addEventListener(
    "input",
    filterPlants
);

filterSelect.addEventListener(
    "change",
    filterPlants
);

/* INITIAL RENDER */

renderFeaturedPlants();
renderAllPlants();
/* MODAL */

const plantModal =
    document.getElementById("plantModal");

const closeModal =
    document.getElementById("closeModal");

function openModal(plant) {

    document.getElementById("modalImage")
        .src = plant.image;

    document.getElementById("modalName")
        .innerText = plant.name;

    document.getElementById("modalScientific")
        .innerText = plant.scientific;

    document.getElementById("modalCare")
        .innerText = plant.care;

    document.getElementById("modalDifficulty")
        .innerText = plant.difficulty;

    plantModal.style.display = "flex";
}

/* CLOSE */

closeModal.addEventListener("click", () => {

    plantModal.style.display = "none";

});

/* OUTSIDE CLICK */

window.addEventListener("click", (e) => {

    if (e.target === plantModal) {

        plantModal.style.display = "none";
    }

});
