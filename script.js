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
    }
};

exhaustedButton.addEventListener("click", function() {
    console.log("Exhausted clicked");
    selectedMood = "exhausted";

    artwork.innerHTML = '<img class="w-[500px] mx-auto" src="' + moods.exhausted.artwork + '">';
    
});

findBookButton.addEventListener("click", function() {
    if (selectedMood) {
        recommendation.innerText = moods[selectedMood].book;
    }
});


