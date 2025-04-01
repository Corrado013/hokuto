document.addEventListener("DOMContentLoaded", function () {
    // Dizionario delle storie
    const stories = {
        ken: "Kenshiro, il legittimo successore della Divina Scuola di Hokuto, combatte in un mondo post-apocalittico proteggendo i deboli e cercando la sua amata Julia, rapita da Shin. Usando il suo stile di lotta mortale, Kenshiro affronta nemici potenti, mostrando forza, compassione e un indomabile senso di giustizia.",
        raoul: "Raoul, il fratello maggiore di Ken, è deciso a dominare il mondo come Re di Hokuto. Rifiutando la successione tradizionale, abbraccia una visione di potere assoluto, diventando temuto e rispettato. Sebbene spietato, il suo animo nasconde un profondo rispetto per Kenshiro e un conflitto interiore sul significato della forza.",
        toki: "Toki, il più compassionevole dei fratelli di Hokuto, abbandona la lotta per curare gli altri. Malato a causa delle radiazioni, usa la sua padronanza dello stile di Hokuto per alleviare la sofferenza. Toki rappresenta la speranza e la redenzione in un mondo devastato, sacrificandosi per gli ideali più alti.",
        jagi: "Jagi, il fratellastro invidioso e corrotto, brama il potere e odia Kenshiro per essere stato scelto come successore. Manipolatore e crudele, usa il nome di Ken per seminare il caos, ma viene infine punito per la sua arroganza. È un esempio tragico di ambizione distruttiva.",
        mamiya: "Mamiya, una coraggiosa guerriera in un mondo brutale, affronta il suo tragico passato con determinazione. Leader di un villaggio, protegge i suoi abitanti con astuzia e forza. È un simbolo di resistenza e speranza, offrendo ispirazione nonostante la perdita e il dolore vissuti."
    };

    // Seleziona gli elementi
    const characters = document.querySelectorAll(".character");
    const characterInfo = document.getElementById("character-info");
    const characterName = document.getElementById("character-name");
    const characterStory = document.getElementById("character-story");
    const searchInput = document.getElementById("search");

    // Funzione per mostrare la storia quando si clicca su un personaggio
    function showStory(event) {
        const name = event.target.dataset.name;
        if (name && stories[name]) {
            characterName.textContent = event.target.textContent; // Mostra il nome
            characterStory.textContent = stories[name]; // Mostra la storia
            characterInfo.style.display = "block"; // Mostra il div info
        }
    }

    // Aggiunge un listener di click a ogni personaggio
    characters.forEach(character => {
        character.addEventListener("click", showStory);
    });

    // Funzione di ricerca
    function searchFunction() {
        let input = searchInput.value.toLowerCase();

        characters.forEach(character => {
            let name = character.dataset.name ? character.dataset.name.toLowerCase() : "";
            let text = character.textContent.toLowerCase();

            if (name.includes(input) || text.includes(input)) {
                character.style.display = "list-item"; // Mostra il personaggio
            } else {
                character.style.display = "none"; // Nasconde il personaggio
            }
        });

        // Nasconde il box info se il personaggio attuale è nascosto
        if (characterInfo.style.display === "block") {
            let visibleCharacters = Array.from(characters).filter(c => c.style.display !== "none");
            let selectedCharacter = visibleCharacters.find(c => c.textContent === characterName.textContent);

            if (!selectedCharacter) {
                characterInfo.style.display = "none";
            }
        }
    }

    // Aggiunge un listener all'input di ricerca
    searchInput.addEventListener("input", searchFunction);
});
