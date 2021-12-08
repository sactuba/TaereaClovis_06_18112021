//Mettre le code JavaScript lié à la page photographer.html

const contenu = document.querySelector(".photographer_contenu");

 fetch('../../data/photographers.json')
.then(res => res.json())
.then(data => console.log(data))




