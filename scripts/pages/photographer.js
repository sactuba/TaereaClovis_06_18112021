//Mettre le code JavaScript lié à la page photographer.html
const url = new URLSearchParams(document.location.search);
const id = url.get('id');
fetch('../../data/photographers.json')
.then(response => response.json())
.then(data => {
    const photoSection = document.getElementById('photo');
    const photographer = data.photographers.filter(photographer => photographer.id == id)[0];
    const filterPhotos = data.media.filter(media => media.photographerId == photographer.id); 
    const photographerInfoMain = new PhotographerPage(photographer);
    photographerInfoMain.infoPhotographer();
    console.log(filterPhotos);
    filterPhotos.forEach(media => { 
        const photographerMedia = new PhotographerMediaPhoto(media);
        const cardPhotoDom =  photographerMedia.mediaPhotographer();
        
        photoSection.innerHTML += cardPhotoDom;
        /* console.log(media); */
        /* console.log(cardPhotoDom); */
    });
});



class PhotographerPage{
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

class PhotographerMediaPhoto /* extends photographerPage */ {
    constructor(media) {
        this.id_media = media.id
        this.photograppherId = media.photographerid
        this.video = media.video
        this.title = media.title
        this.image_media = media.image
        this.likes = media.likes
        this.date = media.date
        this.price_media = media.price
    }

    mediaPhotographer() {
        const likePrice = document.getElementById('like_price');

        if (this.image_media = this.image_media) {
            const photoCard = `
<div class="photo_card">
<img
  src="../../assets/Sample Photos/${this.image_media/*  || this.video */}"
  alt=""
/>
<div id="legende">${this.title}<span id="like">${this.likes}<i class="fas fa-heart"></i></span></div>
</div>
`  
 }else {
            const videoCard = `
            <div class="photo_card">
            <video>
              <src="../../assets/Sample Photos/${this.video}"
              alt=""
            ></video>
            <div id="legende">${this.title}<span id="like">${this.likes}<i class="fas fa-heart"></i></span></div>
            </div>
            `
        }




const totalLikesPrice = `
<span class="total_likes" id="total_likes">
${this.title}
<i class="fas fa-heart"></i
></span>
<span class="price" id="price">${this.price_media} /jour</span>
`
likePrice.innerHTML = totalLikesPrice;
       /* return(); */
    }

}



const likeClick = document.querySelectorAll(".fa-heart");
const likeCounter = document.querySelectorAll("#like");

/*      filter() {
        let populariteFilter = document.getElementById("popularité");
        let dateFilter = document.getElementById("date");
        let titreFilter = document.getElementById("titre");
        const filterPhotos = this.date.filter(media => media.photographerId == photographer.id); 
        const filterPhotos = data.media.filter(media => media.photographerId == photographer.id); 
        const filterPhotos = data.media.filter(media => media.photographerId == photographer.id); 
    
    } */