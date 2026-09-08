const artwork = document.getElementById("artwork");

const exhaustedButton = document.getElementById("exhausted");
const destroyedButton = document.getElementById("emotionally-destroyed");
const motivatedButton = document.getElementById("motivated");
const cheerfulButton = document.getElementById("cheerful");
const melancholyButton = document.getElementById("sweet-melancholy");
const recommendation = document.getElementById("recommendation");
const findBookButton = document.getElementById("find-book");

let selectedMood = null;

const moods = {
    exhausted: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/2/26/Tired_woman_with_heavy_load_of_home-work._Lafayette_St.%2C_near_Astor_Place._LOC_cph.3a48916.jpg",
        book: "The Death of Ivan Ilyich by Leo Tolstoy"
    },

    emotionallyDestroyed: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/6/68/Albert_Besnard%2C_Sadness_%28Tristesse%29%2C_1887%2C_NGA_83816.jpg",
        book: "The Bell Jar by Sylvia Plath"
    },

    motivated: {
         artwork: "https://upload.wikimedia.org/wikipedia/commons/e/e1/1807%2C_Friedland.jpg",
        book: "Atomic Habits by James Clear"
    },

    cheerful: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/0/06/George_Caleb_Bingham%2C_The_Jolly_Flatboatmen%2C_1846%2C_NGA_75206.jpg",
        book: "Born A Crime by Trevor Noah"
    },

    sweetMelancholy: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/1/11/Joseph-Marie_Vien_-_Sweet_Melancholy_%281756%29.jpg",
        book: "The Book of Disquiet by Fernando Pessoa"
    }
};


exhaustedButton.addEventListener("click", function() {
    console.log("Exhausted clicked");
    selectedMood = "exhausted";

    recommendation.innerText = "";

    artwork.innerHTML = '<img class="w-[500px] mx-auto" src="' + moods.exhausted.artwork + '">';
});


destroyedButton.addEventListener("click", function() {
    console.log("Emotionally Destroyed clicked");
    selectedMood = "emotionallyDestroyed";

    recommendation.innerText = "";

    artwork.innerHTML = '<img class="w-[300px] mx-auto" src="' + moods.emotionallyDestroyed.artwork + '">';
});


motivatedButton.addEventListener("click", function() {
    console.log("Motivated clicked");
    selectedMood = "motivated";

    recommendation.innerText = "";

    artwork.innerHTML = '<img class="w-[550px] mx-auto" src="' + moods.motivated.artwork + '">';
});


cheerfulButton.addEventListener("click", function() {
    console.log("Cheerful clicked");
    selectedMood = "cheerful";

    recommendation.innerText = "";

    artwork.innerHTML = '<img class="w-[450px] mx-auto" src="' + moods.cheerful.artwork + '">';
});


melancholyButton.addEventListener("click", function() {
    console.log("Sweet Melancholy clicked");
    selectedMood = "sweetMelancholy";

    recommendation.innerText = "";

    artwork.innerHTML = '<img class="w-[300px] mx-auto" src="' + moods.sweetMelancholy.artwork + '">';
});


findBookButton.addEventListener("click", function() {
    if (selectedMood) {
        recommendation.innerText = moods[selectedMood].book;
    }
});