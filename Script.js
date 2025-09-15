document.addEventListener('DOMContentLoaded', function() {
    // --- MAP INITIALISATION ---
    // This creates the interactive map on your homepage.
    // The coordinates are centred on Stapleford, England.
    const map = L.map('map').setView([52.898, -1.298], 13);

    // This adds the visual map tiles from OpenStreetMap (which is free).
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // --- EXAMPLE MARKERS ---
    // In the real version, these markers would be loaded from your database.
    const oldPlough = L.marker([52.899, -1.300]).addTo(map)
        .bindPopup('<b>The Old Plough</b><br>Rank: Double-O-Dad');

    const library = L.marker([52.897, -1.299]).addTo(map)
        .bindPopup('<b>Stapleford Library</b><br>Rank: Station Chief');

    // --- BUTTON EVENT LISTENERS ---
    const fileReportButton = document.getElementById('file-report-button');
    if (fileReportButton) {
        fileReportButton.onclick = function() {
            // In a real app, this would open a new page or a pop-up form.
            alert('The "File a Mission Report" form would open here!');
        };
    }

    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.onclick = function() {
            const searchTerm = document.getElementById('search-bar').value;
            alert(`Searching database for: "${searchTerm}"...`);
            // Here, you would write code to search your database and display results.
        };
    }
});
