document.addEventListener('DOMContentLoaded', function() {
    const incidentDetails = document.getElementById('incidentDetails');
    const suggestionsList = document.getElementById('suggestionsList');
    const suggestionForm = document.getElementById('suggestionForm');
    const suggestionInput = document.getElementById('suggestionInput');
    const totalSuggestions = document.getElementById('totalSuggestions');

    const incidentData = {
        name: 'Racial Discrimination',
        place: 'Delhi',
        date: '5 Oct, 2021',
        time: '3:20 pm',
        suggestions: [
            { text: 'Improve diversity training programs.', timestamp: '3/30/2024, 11:01:05 PM' },
            { text: 'Establish a zero-tolerance policy for discrimination.', timestamp: '3/30/2024, 11:01:09 PM' }
        ],
        views: 150
    };

    displayIncidentDetails(incidentData);

    displaySuggestions(incidentData.suggestions);

    updateTotalSuggestions(incidentData.suggestions.length);

    suggestionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newSuggestionText = suggestionInput.value.trim();
        if (newSuggestionText !== '') {
            const timestamp = new Date().toLocaleString();
            const newSuggestion = { text: newSuggestionText, timestamp: timestamp };
            incidentData.suggestions.push(newSuggestion);
            displaySuggestions(incidentData.suggestions);
            suggestionInput.value = '';
            updateTotalSuggestions(incidentData.suggestions.length);
        }
    });

    function displayIncidentDetails(incidentData) {
        const detailsHTML = `
            <div class="incident-detail">
                <strong>Name of Incident:</strong> ${incidentData.name}
            </div>
            <div class="incident-detail">
                <strong>Place:</strong> ${incidentData.place}
            </div>
            <div class="incident-detail">
                <strong>Date:</strong> ${incidentData.date}
            </div>
            <div class="incident-detail">
                <strong>Time:</strong> ${incidentData.time}
            </div>
            <div class="incident-detail">
                <strong>Views:</strong> ${incidentData.views}
            </div>
        `;
        incidentDetails.innerHTML = detailsHTML;
    }

    function displaySuggestions(suggestions) {
        const suggestionsHTML = suggestions.map(suggestion => `
            <div class="suggestion">${suggestion.text}<span class="timestamp">${suggestion.timestamp}</span></div>
        `).join('');
        suggestionsList.innerHTML = suggestionsHTML;
    }

    function updateTotalSuggestions(total) {
        totalSuggestions.textContent = `Total Suggestions: ${total}`;
    }
});