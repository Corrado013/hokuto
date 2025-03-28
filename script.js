// Funzione per la modalità dark
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Funzione di ricerca per personaggi e tecniche
function searchFunction() {
    let input = document.getElementById("search").value.toLowerCase();
    let characters = document.querySelectorAll(".character");
    
    characters.forEach(function(character) {
        let name = character.textContent.toLowerCase();
        if (name.includes(input)) {
            character.style.display = "block";
        } else {
            character.style.display = "none";
        }
    });
}
