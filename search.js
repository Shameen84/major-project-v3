// Search Bar Elements ko select karna
const searchInput = document.querySelector('.search-input');
const searchBtn = document.getElementById('searchBtn');
const searchForm = document.getElementById('searchForm');

// 1. Common Search Function (Jo asli kaam karega)
function performSearch() {
    let query = searchInput.value.trim();
    
    if (query !== "") {
        // System Check Alert
        alert("System Check: Aapne '" + query + "' search kiya hai. Connection working! ✅\nSearching on Freelanzo...");
        
        console.log("Searching for:", query);
        
        // Asli kaam: Agar aapke paas jobs.html hai, toh niche wali line se comment hata dein
        // window.location.href = "jobs.html?q=" + query;
    } else {
        alert("Bhai, please enter something to search!");
    }
}

// 2. Form Submit Logic (Bootstrap navbar ke liye best hai)
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Page reload hone se rokta hai
        performSearch();
    });
}

// 3. Enter key dabane par (Input field ke liye)
if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Form double submit na ho
            performSearch();
        }
    });
}

// 4. Search button click karne par
if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
    });
}
