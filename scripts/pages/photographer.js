//Mettre le code JavaScript lié à la page photographer.html
const url = new URLSearchParams(document.location.search);
const id = url.get('id');
fetch('../../data/photographers.json')
.then(response => response.json())
.then(data => {
    const photographer = data.photographers.filter(photographer => photographer.id == id)[0];
    const media = data.media.filter(media => media.photograppherId == photographer.id);
    const photographerInfoMain = new photographerPage(photographer);
    const photographerInfo = photographerInfoMain.infoPhotographer();
    console.log(media);
    console.log(photographerInfo);
})

class photographerPage{
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
         /*  const contactButtonSection = document.getElementById('contact_button'); */
          const iconePhotoMain = document.getElementById('icone_photo');
          const info = `
          <h1 id="name">${this.name}</h1>
          <p id="city_country">${this.city}, ${this.country}</p>
          <p id="tageline">${this.tagline}</p>
          `
          const photoMain = `
          <img id="image" src="assets/photographers/${this.portrait}" alt="" />
          `
          iconePhotoMain.innerHTML += photoMain;
          infoSection.innerHTML += info;
         /*  console.log(info); */
          return (info);
    }

    photoContenu() {
        const photographerContenu = document.querySelector('.photoggrapher_contenu');

    }
}

