function displayFilter() {
    const date = document.getElementById("date");
    const titre = document.getElementById("titre");
    date.style.display = "block";
    titre.style.display = "block";
}

function closeFilter() {
    const date = document.getElementById("date");
    const titre = document.getElementById("titre");
    date.style.display = "none";
    titre.style.display = "none";
}