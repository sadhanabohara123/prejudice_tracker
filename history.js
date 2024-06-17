function toggleFilterOptions() {
    const filterOptions = document.getElementById('filterOptions');
    const filterSymbol = document.querySelector('.filter-symbol');
    if (filterOptions.style.display === 'block') {
        filterOptions.style.display = 'none';
        filterSymbol.style.transform = 'rotate(0deg)';
    } else {
        filterOptions.style.display = 'block';
        filterSymbol.style.transform = 'rotate(90deg)';
    }
}

function filterIncident(incident) {
    const incidentDataArray = getIncidentDataArray(incident);
    const content = document.getElementById('content');

    content.innerHTML = '';

    incidentDataArray.forEach((incidentData) => {
        const section = document.createElement('div');
        section.classList.add('incident-section');

        const incidentBox = document.createElement('div');
        incidentBox.classList.add('incident-box');
        incidentBox.innerHTML = `
            <h3>${incidentData.name}</h3>
            <p>Place: ${incidentData.place}</p>
            <p>Date: ${incidentData.date}</p>
            <p>Time: ${incidentData.time}</p>
            <p>Suggestions: ${incidentData.suggestions}</p>
            <p>Views: ${incidentData.views}</p>
            <div class="detailed-description" style="display: none;">
                ${incidentData.description}
            </div>
        `;

        incidentBox.addEventListener('click', function() {
            const description = this.querySelector('.detailed-description');
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        section.appendChild(incidentBox);

        content.appendChild(section);
    });
}

function displayAllIncidents() {
    const allIncidents = [
        'Racial Discrimination',
        'Gender Bias',
        'Religious Discrimination',
        'Sexual Orientation',
        'Disability-based prejudice'
    ];
    
    allIncidents.forEach(incident => {
        const incidentDataArray = getIncidentDataArray(incident);
        appendIncidentData(incidentDataArray);
    });
}

function appendIncidentData(incidentDataArray) {
    const content = document.getElementById('content');
    incidentDataArray.forEach((incidentData) => {
        const section = document.createElement('div');
        section.classList.add('incident-section');

        const incidentBox = document.createElement('div');
        incidentBox.classList.add('incident-box');
        incidentBox.innerHTML = `
            <h3>${incidentData.name}</h3>
            <p>Place: ${incidentData.place}</p>
            <p>Date: ${incidentData.date}</p>
            <p>Time: ${incidentData.time}</p>
            <p>Suggestions: ${incidentData.suggestions}</p>
            <p>Views: ${incidentData.views}</p>
        `;

        incidentBox.addEventListener('click', function() {
            window.location.href = "page.html";
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        section.appendChild(incidentBox);
        content.appendChild(section);
    });
}

displayAllIncidents();

function getIncidentDataArray(incident) {
    return [
        {
            name: incident,
            place: 'Delhi',
            date: '5 Oct, 2021',
            time: '3:20 pm',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
        },
        {
            name: incident,
            place: 'Mumbai',
            date: '21 Sep, 2021',
            time: '10:30 am',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
        },
        {
            name: incident,
            place: 'Kolkata',
            date: '17 Aug, 2018',
            time: '11:22 am',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Chennai',
            date: '8 March, 2019',
            time: '4:15 pm',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Bangalore',
            date: '16 Jan, 2017',
            time: '12:14 am',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Hyderabad',
            date: '22 April, 2022',
            time: '3:24 pm',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Ahmedabad',
            date: '12 Nov, 2018',
            time: '5:30 pm',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Lucknow',
            date: '4 June, 2020',
            time: '8:12 pm',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Pune',
            date: '11 June, 2021',
            time: '11:45 am',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Jaipur',
            date: '19 Sep, 2019',
            time: '3:12 am',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Delhi',
            date: '23 April, 2018',
            time: '4:32 pm',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
        {
            name: incident,
            place: 'Ahmedabad',
            date: '8 May, 2019',
            time: '4:38 am',
            suggestions: Math.floor(Math.random() * 100), 
            views: Math.floor(Math.random() * 1000), 
            description: 'Example detailed description for ' + incident
        },
    ];
}