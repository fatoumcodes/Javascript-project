const artwork = document.getElementById("artwork");

const exhaustedButton = document.getElementById("exhausted");
const destroyedButton = document.getElementById("emotionally-destroyed");
const motivatedButton = document.getElementById("motivated");
const cheerfulButton = document.getElementById("cheerful");
const melancholyButton = document.getElementById("sweet-melancholy");

const recommendation = document.getElementById("recommendation");
const findBookButton = document.getElementById("find-book");
const surpriseMeButton = document.getElementById("surprise-me");

let selectedMood = null;

const moods = {
    exhausted: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/2/26/Tired_woman_with_heavy_load_of_home-work._Lafayette_St.%2C_near_Astor_Place._LOC_cph.3a48916.jpg",
        book: {
            title: "The Death of Ivan Ilyich by Leo Tolstoy",
            link: "https://www.amazon.co.uk/s?k=The+Death+of+Ivan+Ilyich+Leo+Tolstoy"
        }
    },

    emotionallyDestroyed: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/6/68/Albert_Besnard%2C_Sadness_%28Tristesse%29%2C_1887%2C_NGA_83816.jpg",
        book: {
            title: "The Bell Jar by Sylvia Plath",
            link: "https://www.amazon.co.uk/s?k=The+Bell+Jar+Sylvia+Plath"
        }
    },

    motivated: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/e/e1/1807%2C_Friedland.jpg",
        book: {
            title: "Atomic Habits by James Clear",
            link: "https://www.amazon.co.uk/s?k=Atomic+Habits+James+Clear"
        }
    },

    cheerful: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/0/06/George_Caleb_Bingham%2C_The_Jolly_Flatboatmen%2C_1846%2C_NGA_75206.jpg",
        book: {
            title: "Born a Crime by Trevor Noah",
            link: "https://www.amazon.co.uk/s?k=Born+a+Crime+Trevor+Noah"
        }
    },

    sweetMelancholy: {
        artwork: "https://upload.wikimedia.org/wikipedia/commons/1/11/Joseph-Marie_Vien_-_Sweet_Melancholy_%281756%29.jpg",
        book: {
            title: "The Book of Disquiet by Fernando Pessoa",
            link: "https://www.amazon.co.uk/s?k=The+Book+of+Disquiet+Fernando+Pessoa"
        }
    }
};


function showMood(mood) {
    selectedMood = mood;
    recommendation.innerText = "";

    artwork.innerHTML =
        '<img class="w-[300px] max-w-full mx-auto object-contain" src="' +
        moods[mood].artwork +
        '" alt="' +
        mood +
        ' artwork">';
}

exhaustedButton.addEventListener("click", function() {
    exhaustedButton.classList.add("bg-[#6B3E26]", "text-[#F3E9D2]", "scale-105");

    console.log("Exhausted clicked");
    showMood("exhausted");

});

destroyedButton.addEventListener("click", function() {
    showMood("emotionallyDestroyed");
});

motivatedButton.addEventListener("click", function() {
    showMood("motivated");
});

cheerfulButton.addEventListener("click", function() {
    showMood("cheerful");
});

melancholyButton.addEventListener("click", function() {
    showMood("sweetMelancholy");
});

findBookButton.addEventListener("click", function() {

    if (selectedMood) {
        recommendation.innerHTML =
            '<a href="' + moods[selectedMood].book.link +
             '" target="_blank"> <u>' +
            moods[selectedMood].book.title +
        '</u></a>';
    }

});

surpriseMeButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * Object.keys(moods).length);
    const moodNames = Object.keys(moods);
    const randomMood = moodNames [randomIndex];
    showMood (randomMood);
});
