 // Penser à remplacer par les données récupérées dans le json
    async function displayData() {
        const photographersSection = document.querySelector(".photographer_section");
        fetch('../../data/photographers.json')
        .then(response => response.json())
        .then(data => {
        data.photographers.forEach((photographer) => {
            const photographerModel =  new photographerFactory(photographer) ;
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.innerHTML += userCardDOM;
         
        });
    })
           .catch(error => console.error(error.message));
    };                                                                        
  
    async function init() {
        // Récupère les datas des photographes
        displayData();
    };
    
    init();


     