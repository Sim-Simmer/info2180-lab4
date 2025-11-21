document.addEventListener('DOMContentLoaded', function() {
    let searchBtn = document.getElementById('searchButton');
    let searchInput = document.getElementById('searchInput');
    let result = document.getElementById('result');
    searchBtn.addEventListener('click', function() {
        let query = searchInput.value.trim();
        let url = "superheroes.php?query=" + encodeURIComponent(query);
        fetch(url)
            .then(response => response.text())
            .then (data => {
                result.innerHTML = data;
            });
    });
});