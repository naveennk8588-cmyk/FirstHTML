```javascript
/* ==========================================
   DESI RASOI
   150 INDIAN RECIPES
========================================== */


/* ==========================================
   RECIPE DATABASE
========================================== */

const recipeData = {

    "Breakfast": [
        "Masala Dosa",
        "Idli",
        "Pongal",
        "Poori Masala",
        "Aloo Paratha",
        "Upma",
        "Medu Vada",
        "Masala Omelette",
        "Vegetable Uttapam",
        "Rava Dosa",
        "Pesarattu",
        "Sabudana Khichdi",
        "Poha",
        "Moong Dal Chilla",
        "Besan Chilla",
        "Methi Paratha",
        "Appam",
        "Puttu",
        "Kanda Poha",
        "Bread Upma"
    ],

    "Main Course": [
        "Chicken Biryani",
        "Mutton Biryani",
        "Vegetable Biryani",
        "Paneer Butter Masala",
        "Palak Paneer",
        "Butter Chicken",
        "Chicken Tikka Masala",
        "Mutton Curry",
        "Chicken Curry",
        "Fish Curry",
        "Rajma Masala",
        "Chole Masala",
        "Dal Makhani",
        "Dal Tadka",
        "Malai Kofta",
        "Kadai Paneer",
        "Aloo Gobi",
        "Baingan Bharta",
        "Vegetable Korma",
        "Chicken Chettinad"
    ],

    "Starters": [
        "Chicken 65",
        "Chicken Tikka",
        "Paneer Tikka",
        "Gobi Manchurian",
        "Tandoori Chicken",
        "Fish Fry",
        "Chicken Seekh Kebab",
        "Hara Bhara Kebab",
        "Crispy Corn",
        "Chilli Paneer"
    ],

    "Dessert": [
        "Gulab Jamun",
        "Rasmalai",
        "Jalebi",
        "Kaju Katli",
        "Mysore Pak",
        "Kulfi",
        "Gajar Ka Halwa",
        "Carrot Halwa",
        "Besan Ladoo",
        "Motichoor Ladoo",
        "Rasgulla",
        "Kheer",
        "Payasam",
        "Shrikhand",
        "Soan Papdi",
        "Peda",
        "Coconut Barfi",
        "Milk Cake",
        "Malpua",
        "Double Ka Meetha"
    ],

    "Drinks": [
        "Mango Lassi",
        "Masala Chai",
        "Badam Milk",
        "Rose Milk",
        "Filter Coffee",
        "Jal Jeera",
        "Nimbu Pani",
        "Fresh Lime Soda",
        "Buttermilk",
        "Thandai"
    ],

    "Bread": [
        "Butter Naan",
        "Garlic Naan",
        "Plain Naan",
        "Tandoori Roti",
        "Rumali Roti",
        "Lachha Paratha",
        "Missi Roti",
        "Bhatura",
        "Kulcha",
        "Roomali Roti"
    ],

    "South Indian": [
        "Sambar",
        "Rasam",
        "Lemon Rice",
        "Tamarind Rice",
        "Coconut Rice",
        "Curd Rice",
        "Tomato Rice",
        "Sambar Rice",
        "Ven Pongal",
        "Ghee Pongal",
        "Idli Sambar",
        "Kanchipuram Idli",
        "Rava Idli",
        "Set Dosa",
        "Neer Dosa",
        "Onion Dosa",
        "Mysore Masala Dosa",
        "Rava Dosa",
        "Pesarattu",
        "Adai Dosa",
        "Medu Vada",
        "Masala Vada",
        "Bonda",
        "Kuzhi Paniyaram",
        "Appam",
        "Puttu",
        "Idiyappam",
        "Vegetable Kurma",
        "Chicken Chettinad",
        "Kerala Fish Curry"
    ],

    "Soup": [
        "Tomato Soup",
        "Sweet Corn Soup",
        "Hot and Sour Soup",
        "Vegetable Clear Soup",
        "Chicken Clear Soup",
        "Manchow Soup",
        "Spinach Soup",
        "Mushroom Soup",
        "Lentil Soup",
        "Mulligatawny Soup"
    ],

    "Street Food": [
        "Pav Bhaji",
        "Pani Puri",
        "Bhel Puri",
        "Sev Puri",
        "Dahi Puri",
        "Vada Pav",
        "Kathi Roll",
        "Chole Bhature",
        "Aloo Tikki",
        "Dabeli"
    ],

    "Snacks": [
        "Samosa",
        "Onion Pakoda",
        "Aloo Pakora",
        "Bread Pakora",
        "Mirchi Bajji",
        "Banana Bajji",
        "Murukku",
        "Ribbon Pakoda",
        "Thattai",
        "Mixture"
    ]

};


/* ==========================================
   ICONS
========================================== */

const icons = {

    "Breakfast": "🍳",
    "Main Course": "🍛",
    "Starters": "🌶️",
    "Dessert": "🍰",
    "Drinks": "🥤",
    "Bread": "🍞",
    "South Indian": "🍲",
    "Soup": "🍜",
    "Street Food": "🍟",
    "Snacks": "🥟"

};


/* ==========================================
   BASE INGREDIENTS
========================================== */

const commonIngredients = {

    "Breakfast": [
        "Rice",
        "Urad dal",
        "Potato",
        "Onion",
        "Green chilli",
        "Ginger",
        "Mustard seeds",
        "Curry leaves",
        "Turmeric",
        "Salt"
    ],

    "Main Course": [
        "Basmati rice",
        "Onion",
        "Tomato",
        "Ginger garlic paste",
        "Green chilli",
        "Garam masala",
        "Chilli powder",
        "Coriander",
        "Oil",
        "Salt"
    ],

    "Starters": [
        "Paneer / Chicken",
        "Corn flour",
        "Ginger garlic paste",
        "Chilli powder",
        "Garam masala",
        "Lemon juice",
        "Coriander",
        "Pepper",
        "Oil",
        "Salt"
    ],

    "Dessert": [
        "Milk",
        "Sugar",
        "Ghee",
        "Cardamom",
        "Cashews",
        "Almonds",
        "Pistachios",
        "Saffron",
        "Rose water",
        "Milk powder"
    ],

    "Drinks": [
        "Milk",
        "Water",
        "Sugar",
        "Cardamom",
        "Ginger",
        "Lemon",
        "Mint",
        "Ice cubes"
    ],

    "Bread": [
        "Wheat flour",
        "All-purpose flour",
        "Yogurt",
        "Butter",
        "Ghee",
        "Baking powder",
        "Water",
        "Salt"
    ],

    "South Indian": [
        "Rice",
        "Toor dal",
        "Urad dal",
        "Tamarind",
        "Coconut",
        "Mustard seeds",
        "Curry leaves",
        "Green chilli",
        "Turmeric",
        "Salt"
    ],

    "Soup": [
        "Tomato",
        "Carrot",
        "Onion",
        "Garlic",
        "Sweet corn",
        "Pepper",
        "Coriander",
        "Water",
        "Oil",
        "Salt"
    ],

    "Street Food": [
        "Potato",
        "Onion",
        "Tomato",
        "Green chilli",
        "Coriander",
        "Chaat masala",
        "Mint chutney",
        "Tamarind chutney",
        "Sev",
        "Salt"
    ],

    "Snacks": [
        "Gram flour",
        "Potato",
        "Onion",
        "Green chilli",
        "Cumin",
        "Coriander",
        "Chilli powder",
        "Turmeric",
        "Oil",
        "Salt"
    ]

};


/* ==========================================
   BUILD 150 RECIPES
========================================== */

let recipes = [];

let id = 1;

for (const category in recipeData) {

    recipeData[category].forEach(name => {

        recipes.push({

            id: id++,

            name: name,

            category: category,

            image:
                `https://loremflickr.com/800/600/${encodeURIComponent(name)},food`,

            rating:
                (4.5 + Math.random() * .5).toFixed(1),

            time:
                getTime(category),

            difficulty:
                getDifficulty(category),

            description:
                `${name} is a delicious traditional Indian dish prepared with authentic spices and fresh ingredients.`,

            ingredients:
                commonIngredients[category],

            nutrition:
                getNutrition(category)

        });

    });

}


/* ==========================================
   TIME
========================================== */

function getTime(category) {

    const values = {

        "Breakfast":
            ["15 mins", "20 mins", "30 mins"],

        "Main Course":
            ["40 mins", "50 mins", "60 mins"],

        "Starters":
            ["20 mins", "30 mins", "40 mins"],

        "Dessert":
            ["20 mins", "30 mins", "45 mins"],

        "Drinks":
            ["5 mins", "10 mins", "15 mins"],

        "Bread":
            ["20 mins", "25 mins", "30 mins"],

        "South Indian":
            ["20 mins", "30 mins", "40 mins"],

        "Soup":
            ["20 mins", "25 mins", "30 mins"],

        "Street Food":
            ["20 mins", "30 mins", "40 mins"],

        "Snacks":
            ["20 mins", "30 mins", "35 mins"]

    };

    const list = values[category];

    return list[
        Math.floor(
            Math.random() * list.length
        )
    ];
}


/* ==========================================
   DIFFICULTY
========================================== */

function getDifficulty(category) {

    if (
        category === "Drinks" ||
        category === "Soup"
    ) {
        return "Easy";
    }

    if (category === "Main Course") {
        return "Medium";
    }

    return Math.random() > .5
        ? "Easy"
        : "Medium";
}


/* ==========================================
   NUTRITION
========================================== */

function getNutrition(category) {

    const values = {

        "Breakfast": {
            calories: "280 kcal",
            protein: "8 g",
            carbs: "42 g",
            fat: "9 g",
            fiber: "5 g"
        },

        "Main Course": {
            calories: "520 kcal",
            protein: "24 g",
            carbs: "58 g",
            fat: "20 g",
            fiber: "7 g"
        },

        "Starters": {
            calories: "320 kcal",
            protein: "18 g",
            carbs: "25 g",
            fat: "15 g",
            fiber: "4 g"
        },

        "Dessert": {
            calories: "360 kcal",
            protein: "7 g",
            carbs: "48 g",
            fat: "16 g",
            fiber: "2 g"
        },

        "Drinks": {
            calories: "150 kcal",
            protein: "5 g",
            carbs: "24 g",
            fat: "4 g",
            fiber: "1 g"
        },

        "Bread": {
            calories: "220 kcal",
            protein: "6 g",
            carbs: "34 g",
            fat: "7 g",
            fiber: "3 g"
        },

        "South Indian": {
            calories: "300 kcal",
            protein: "9 g",
            carbs: "45 g",
            fat: "8 g",
            fiber: "5 g"
        },

        "Soup": {
            calories: "180 kcal",
            protein: "7 g",
            carbs: "25 g",
            fat: "5 g",
            fiber: "4 g"
        },

        "Street Food": {
            calories: "350 kcal",
            protein: "8 g",
            carbs: "48 g",
            fat: "14 g",
            fiber: "5 g"
        },

        "Snacks": {
            calories: "290 kcal",
            protein: "7 g",
            carbs: "32 g",
            fat: "14 g",
            fiber: "4 g"
        }

    };

    return values[category];
}


/* ==========================================
   DOM
========================================== */

const recipeGrid =
    document.getElementById("recipeGrid");

const filters =
    document.getElementById("filters");

const categoryGrid =
    document.getElementById("categoryGrid");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const recipeCount =
    document.getElementById("recipeCount");

const loadMore =
    document.getElementById("loadMore");

const modal =
    document.getElementById("modal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");

const themeBtn =
    document.getElementById("themeBtn");

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

const favBtn =
    document.getElementById("favBtn");

const favCount =
    document.getElementById("favCount");

const toast =
    document.getElementById("toast");


/* ==========================================
   STATE
========================================== */

let selectedCategory = "All";

let searchText = "";

let limit = 12;

let favorites =
    JSON.parse(
        localStorage.getItem(
            "desiFavorites"
        )
    ) || [];


/* ==========================================
   CATEGORY CARDS
========================================== */

function createCategoryCards() {

    categoryGrid.innerHTML = "";

    for (const category in recipeData) {

        const card =
            document.createElement("div");

        card.className =
            "category-card";

        card.innerHTML = `

            <div class="category-icon">
                ${icons[category]}
            </div>

            <h3>${category}</h3>

            <p>
                ${recipeData[category].length}
                Recipes
            </p>

        `;

        card.addEventListener(
            "click",
            () => {

                selectedCategory =
                    category;

                limit = 12;

                updateFilters();

                renderRecipes();

                document
                    .getElementById("recipes")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

        categoryGrid.appendChild(card);

    }

}


/* ==========================================
   FILTER BUTTONS
========================================== */

function createFilters() {

    filters.innerHTML = "";

    const categories = [
        "All",
        ...Object.keys(recipeData)
    ];

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "filter";

        button.textContent =
            category === "All"
                ? "All Recipes"
                : `${icons[category]} ${category}`;

        if (
            category === selectedCategory
        ) {
            button.classList.add("active");
        }

        button.addEventListener(
            "click",
            () => {

                selectedCategory =
                    category;

                limit = 12;

                updateFilters();

                renderRecipes();

            }
        );

        filters.appendChild(button);

    });

}


function updateFilters() {

    document
        .querySelectorAll(".filter")
        .forEach(button => {

            const text =
                button.textContent;

            button.classList.toggle(
                "active",
                selectedCategory === "All"
                    ? text === "All Recipes"
                    : text.includes(
                        selectedCategory
                    )
            );

        });

}


/* ==========================================
   GET FILTERED RECIPES
========================================== */

function getResults() {

    let result =
        recipes.filter(recipe => {

            const categoryOK =
                selectedCategory === "All" ||
                recipe.category ===
                selectedCategory;

            const searchOK =
                recipe.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );

            return categoryOK && searchOK;

        });


    if (
        sortSelect.value === "rating"
    ) {

        result.sort(
            (a,b) =>
                Number(b.rating) -
                Number(a.rating)
        );

    }


    if (
        sortSelect.value === "name"
    ) {

        result.sort(
            (a,b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    if (
        sortSelect.value === "time"
    ) {

        result.sort(
            (a,b) =>
                parseInt(a.time) -
                parseInt(b.time)
        );

    }


    return result;
}


/* ==========================================
   RENDER
========================================== */

function renderRecipes() {

    const results =
        getResults();

    const visible =
        results.slice(0, limit);

    recipeGrid.innerHTML = "";

    visible.forEach(recipe => {

        recipeGrid.appendChild(
            createCard(recipe)
        );

    });

    recipeCount.textContent =
        results.length;

    if (
        limit >= results.length
    ) {

        loadMore.style.display =
            "none";

    } else {

        loadMore.style.display =
            "block";

    }

}


/* ==========================================
   CARD
========================================== */

function createCard(recipe) {

    const card =
        document.createElement("article");

    card.className =
        "recipe-card";

    const saved =
        favorites.includes(recipe.id);

    card.innerHTML = `

        <div class="recipe-image">

            <img
                src="${recipe.image}"
                alt="${recipe.name}"
                loading="lazy"
                onerror="
                    this.src='https://loremflickr.com/800/600/indian,food'
                "
            >

            <span class="badge">
                ${icons[recipe.category]}
                ${recipe.category}
            </span>

            <button
                class="heart ${saved ? "saved" : ""}">
                ${saved ? "❤️" : "🤍"}
            </button>

        </div>


        <div class="recipe-body">

            <div class="rating">
                ⭐ ${recipe.rating}
            </div>

            <h3>
                ${recipe.name}
            </h3>

            <p>
                ${recipe.description}
            </p>

            <div class="recipe-meta">

                <span>
                    ⏱️ ${recipe.time}
                </span>

                <span>
                    📊 ${recipe.difficulty}
                </span>

            </div>

            <button class="view">
                View Recipe →
            </button>

        </div>

    `;


    card
        .querySelector(".heart")
        .addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleFavorite(
                    recipe.id
                );

            }
        );


    card
        .querySelector(".view")
        .addEventListener(
            "click",
            () => {

                openRecipe(
                    recipe.id
                );

            }
        );


    return card;
}


/* ==========================================
   FAVORITES
========================================== */

function toggleFavorite(id) {

    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Removed from favorites"
        );

    } else {

        favorites.push(id);

        showToast(
            "Added to favorites ❤️"
        );

    }

    localStorage.setItem(
        "desiFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();

    renderRecipes();

}


function updateFavoriteCount() {

    favCount.textContent =
        favorites.length;

}


/* ==========================================
   MODAL
========================================== */

function openRecipe(id) {

    const recipe =
        recipes.find(
            item => item.id === id
        );

    if (!recipe) return;


    modalContent.innerHTML = `

        <img
            class="modal-img"
            src="${recipe.image}"
            alt="${recipe.name}"
            onerror="
                this.src='https://loremflickr.com/900/600/indian,food'
            "
        >

        <div class="modal-body">

            <div class="rating">
                ⭐ ${recipe.rating} / 5
            </div>

            <h2>
                ${recipe.name}
            </h2>

            <p class="modal-description">
                ${recipe.description}
            </p>


            <div class="pills">

                <span class="pill">
                    ${icons[recipe.category]}
                    ${recipe.category}
                </span>

                <span class="pill">
                    ⏱️ ${recipe.time}
                </span>

                <span class="pill">
                    📊 ${recipe.difficulty}
                </span>

            </div>


            <div class="modal-columns">

                <div>

                    <h3>
                        🧂 Ingredients
                    </h3>

                    <ul class="ingredients">

                        ${recipe.ingredients
                            .map(item =>
                                `<li>${item}</li>`
                            )
                            .join("")}

                    </ul>

                </div>


                <div>

                    <h3>
                        🥗 Nutrition
                    </h3>

                    <div class="nutrition">

                        <div>
                            <strong>
                                ${recipe.nutrition.calories}
                            </strong>
                            <span>
                                Calories
                            </span>
                        </div>

                        <div>
                            <strong>
                                ${recipe.nutrition.protein}
                            </strong>
                            <span>
                                Protein
                            </span>
                        </div>

                        <div>
                            <strong>
                                ${recipe.nutrition.carbs}
                            </strong>
                            <span>
                                Carbohydrates
                            </span>
                        </div>

                        <div>
                            <strong>
                                ${recipe.nutrition.fat}
                            </strong>
                            <span>
                                Fat
                            </span>
                        </div>

                        <div>
                            <strong>
                                ${recipe.nutrition.fiber}
                            </strong>
                            <span>
                                Fiber
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";
}


function closeRecipe() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";
}


closeModal.addEventListener(
    "click",
    closeRecipe
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {
            closeRecipe();
        }

    }
);


/* ==========================================
   SEARCH
========================================== */

searchInput.addEventListener(
    "input",
    event => {

        searchText =
            event.target.value;

        limit = 12;

        renderRecipes();

    }
);


/* ==========================================
   SORT
========================================== */

sortSelect.addEventListener(
    "change",
    () => {

        limit = 12;

        renderRecipes();

    }
);


/* ==========================================
   LOAD MORE
========================================== */

loadMore.addEventListener(
    "click",
    () => {

        limit += 12;

        renderRecipes();

    }
);


/* ==========================================
   DARK MODE
========================================== */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        const dark =
            document.body.classList.contains(
                "dark"
            );

        themeBtn.textContent =
            dark ? "☀️" : "🌙";

        localStorage.setItem(
            "desiTheme",
            dark ? "dark" : "light"
        );

    }
);


/* ==========================================
   LOAD THEME
========================================== */

if (
    localStorage.getItem(
        "desiTheme"
    ) === "dark"
) {

    document.body.classList.add(
        "dark"
    );

    themeBtn.textContent =
        "☀️";
}


/* ==========================================
   MOBILE MENU
========================================== */

menuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "show"
        );

    }
);


/* ==========================================
   FAVORITES
========================================== */

favBtn.addEventListener(
    "click",
    () => {

        if (favorites.length === 0) {

            showToast(
                "No favorite recipes yet ❤️"
            );

            return;
        }

        const favoriteRecipes =
            recipes.filter(
                recipe =>
                    favorites.includes(
                        recipe.id
                    )
            );

        recipeGrid.innerHTML = "";

        favoriteRecipes.forEach(
            recipe => {

                recipeGrid.appendChild(
                    createCard(recipe)
                );

            }
        );

        recipeCount.textContent =
            favoriteRecipes.length;

        document
            .getElementById("recipes")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* ==========================================
   TOAST
========================================== */

function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2000
    );
}


/* ==========================================
   START WEBSITE
========================================== */

createCategoryCards();

createFilters();

updateFavoriteCount();

renderRecipes();

console.log(
    "Desi Rasoi loaded successfully!"
);

console.log(
    "Total recipes:",
    recipes.length
);
