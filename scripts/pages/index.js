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


    class PhotographerPage {
        constructor(photographer) {
            this.name = photographer.name
            this.id = photographer.id
            this.city = photographer.city
            this.country = photographer.country
            this.tagline = photographer.tagline
            this.price = photographer.price
            this.portrait = photographer.portrait 
          }
    
          infoPhotographer() {
              const infoSection = document.getElementById('info');
              const iconePhotoMain = document.getElementById('icone_photo');
              const likePrice = document.getElementById('like_price');
              const info = `
              <h1 id="name">${this.name}</h1>
              <p id="city_country">${this.city}, ${this.country}</p>
              <p id="tageline">${this.tagline}</p>
              `
              const photoMain = `
              <img id="image" src="assets/photographers/${this.portrait}" alt="" />
              `
              const totalLikesPrice = `
              <span class="total_likes">
              <span id="total_likes"></span>
              <i class="fas fa-heart"></i></span>
              <span class="price" id="price">${this.price}€ /jour</span>
              `
              iconePhotoMain.innerHTML += photoMain;
              infoSection.innerHTML += info;
              likePrice.innerHTML = totalLikesPrice;
              return (info, photoMain, totalLikesPrice);
        }
    }
    