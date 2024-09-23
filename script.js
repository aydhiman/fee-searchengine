document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearHistoryButton = document.getElementById('clearHistoryButton');
    const searchHistoryList = document.getElementById('searchHistory');

    // Load search history from localStorage
    const loadSearchHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            searchHistoryList.appendChild(li);
        });
    };

    // Save search term to localStorage
    const saveSearchTerm = (term) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!history.includes(term)) {
            history.push(term);
            localStorage.setItem('searchHistory', JSON.stringify(history));
        }
    };

    // Clear search history
    const clearSearchHistory = () => {
        localStorage.removeItem('searchHistory');
        searchHistoryList.innerHTML = '';
    };

    // Search button click event
    searchButton.addEventListener('click', () => {
        const term = searchInput.value.trim();
        if (term) {
            saveSearchTerm(term);
            const li = document.createElement('li');
            li.textContent = term;
            searchHistoryList.appendChild(li);
            searchInput.value = '';
        }
    });

    // Clear history button click event
    clearHistoryButton.addEventListener('click', clearSearchHistory);

    // Load the search history when the page loads
    loadSearchHistory();
});
