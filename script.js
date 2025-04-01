// Funzione per la modalità dark
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Funzione di ricerca per personaggi e tecniche
function searchFunction() {
    let input = document.getElementById("search").value.toLowerCase();
    let characters = document.querySelectorAll(".character");

    characters.forEach(function(character) {
        let name = character.dataset.name ? character.dataset.name.toLowerCase() : "";
        let text = character.textContent.toLowerCase();
        if (name.includes(input) || text.includes(input)) {
            character.style.display = "block";
        } else {
            character.style.display = "none";
        }
    });
};
 // Seleziona la lista di personaggi
    const charactersList = document.getElementById("characters-list");
    const characterName = document.getElementById("character-name");
    const characterStory = document.getElementById("character-story");
    const characterInfo = document.getElementById("character-info");

    // Aggiunge un listener agli elementi <li> tramite event delegation
    charactersList.addEventListener("click", function (event) {
        if (event.target.classList.contains("character")) {
            const name = event.target.dataset.name;
            if (name && stories[name]) {
                characterName.textContent = event.target.textContent;
                characterStory.textContent = stories[name];
                characterInfo.style.display = "block"; // Mostra la sezione informazioni
            }
        }
    });

    // Assicura che il campo di ricerca funzioni correttamente
    document.getElementById("search").addEventListener("input", searchFunction);
});
