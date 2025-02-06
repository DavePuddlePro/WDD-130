document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const checkButton = document.getElementById('checkButton');
    const misspelledList = document.getElementById('misspelledList');

    // Function to load dictionary files
    async function loadDictionary(en_US) {
        const affPath = `dictionaries/en_US/en_US.aff`;
        const dicPath = `dictionaries/en_US/en_US.dic`;

        try {
            const affResponse = await fetch(affPath);
            const affData = await affResponse.text();

            const dicResponse = await fetch(dicPath);
            const dicData = await dicResponse.text();

            // Initialize Typo.js with the loaded data
            const dictionary = new Typo('en_US', affData, dicData);

            return dictionary;
        } catch (error) {
            console.error('Error loading dictionary files:', error);
            return null;
        }
    }

    // Function to check spelling
    async function checkSpelling() {
        const dictionary = await loadDictionary('en_US');
        if (!dictionary) {
            alert('Failed to load the dictionary.');
            return;
        }

        const text = textInput.value;
        const words = text.split(/\s+/);
        const misspelledWords = new Set();

        words.forEach(word => {
            if (word && !dictionary.check(word)) {
                misspelledWords.add(word);
            }
        });

        // Display misspelled words
        misspelledList.innerHTML = '';
        misspelledWords.forEach(word => {
            const listItem = document.createElement('li');
            listItem.textContent = word;
            misspelledList.appendChild(listItem);
        });
    }

    checkButton.addEventListener('click', checkSpelling);
});
