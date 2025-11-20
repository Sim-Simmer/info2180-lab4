document.addEventListener('DOMContentLoaded', function() {
    let searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        console.log("Button clicked");
        fetch("superheroes.php")
            .then(response => response.text())
            .then (data => {
                alert(data);
            });
    });
});