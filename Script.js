document.addEventListener('DOMContentLoaded', function() {
    // --- MAP INITIALISATION ---
    const map = L.map('map').setView([52.898, -1.298], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // --- EXAMPLE MARKERS ---
    const oldPlough = L.marker([52.899, -1.300]).addTo(map)
        .bindPopup('<b>The Old Plough</b><br>Rank: Double-O-Dad');
    const library = L.marker([52.897, -1.299]).addTo(map)
        .bindPopup('<b>Stapleford Library</b><br>Rank: Station Chief');

    
    // --- MODAL (POP-UP FORM) LOGIC ---
    const modal = document.getElementById('submission-modal');
    const openModalButton = document.getElementById('file-report-button');
    const closeModalButton = document.querySelector('.close-button');
    const reportForm = document.getElementById('report-form');

    // When the user clicks the "FILE A MISSION REPORT" button, open the modal
    openModalButton.onclick = function() {
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    closeModalButton.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // When the user submits the form
    reportForm.addEventListener('submit', function(event) {
        event.preventDefault(); // This stops the page from reloading
        
        // --- NEXT STEP: Add Supabase code here to save the data ---
        
        alert('Mission Report Ready for Transmission!\n(Next step is to connect this to the database.)');
        
        // Hide the form after submission
        modal.style.display = 'none'; 
    });


    // --- SEARCH LOGIC (Placeholder) ---
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.onclick = function() {
            const searchTerm = document.getElementById('search-bar').value;
            alert(`Searching database for: "${searchTerm}"...`);
        };
    }
});
