//Mettre le code JavaScript lié à la page photographer.html
const url = new URLSearchParams(document.location.search);
const id = url.get('id');
fetch('../../data/photographers.json')
.then(response => response.json())
.then(data => {
    const photographer = data.photographers.filter(photographer => photographer.id == id)[0];
    const media = data.media.filter(media => media.photograppherId == photographer.id);
    console.log(media);
    console.log(photographer);
})

class photographerPage{
    constructor(photographer) {
        this.name = photographer.name
        this.id = photographer.id
        this.city = photographer.city
        this.country = photographer.country
        this.tageline = photographer.tageline
        this.price = photographer.price
        this.portrait = photographer.portrait 
      }

      infoPhotographer() {
          const picture = `assets/photographers/${this.portrait}`;
          const infoSection = document.getElementById('info');
          const contactButtonSection = document.getElementById('contact_button');
          const iconePhotoSection = document.getElementById('icone_photo');
          const info = `
          <h1 id="name">${this.name}</h1>
          <p id="city_country">${this.city}, ${this.country}</p>
          <p id="tageline">${this.tageline}</p>
          `
          infoSection.innerHTML += info;
         /*  console.log(info); */
          return (info);
    }
}

