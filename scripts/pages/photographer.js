//Mettre le code JavaScript lié à la page photographer.html
const url = new URLSearchParams(document.location.search);
const id = url.get('id');
fetch('../../data/photographers.json')
.then(response => response.json())
.then(data => {
    const photoSection = document.getElementById('photo');
    const photographer = data.photographers.filter(photographer => photographer.id == id)[0];
    const media = data.media.filter(media => media.photograppherId == photographer.id);
    const photographerInfoMain = new photographerPage(photographer);
    const photographerInfo = photographerInfoMain.infoPhotographer();
    data.media.forEach((photographerMediaInfo) => {
        const photographerMedia = new photographerMediaPhoto(photographerMediaInfo);
        const cardPhotoDom =  photographerMedia.mediaPhotographer();
        photoSection.innerHTML += cardPhotoDom;
    });
    console.log(cardPhotoDom);
    console.log(photographerInfo);
})


fetch('../../assets/Sample Photos/')

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
          return (info, photoMain);
    }
}

class photographerMediaPhoto extends photographerPage {
    constuctor(media) {
        this.id_media = media.id
        this.photograppherId = media.id
        this.title = media.title
        this.image_media = media.image
        this.likes = media.likes
        this.date = media.date
        this.price_media = media.price
    }

    mediaPhotographer() {
const photoCard = `
<div class="photo_card">
<img
  src="/assets/Sample Photos/${this.name}/${this.image_media}"
  alt=""
/>
<div id="legende">${this.title}<span id="like">${this.likes}</span></div>
</div>
`
       return(photoCard);
    }
}

function filter() {
    let populariteFilter = document.getElementById("popularité");
    let dateFilter = document.getElementById("date");
    let titreFilter = document.getElementById("titre");
}