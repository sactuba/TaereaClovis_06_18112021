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
    /* console.log(filterPhotos); */
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

class PhotographerMediaPhoto {
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
        if(this.id_media) {
        var card =  
            `
           <div class="photo_card">
           <img src="../../assets/Sample Photos/${this.image_media}" alt="" onclick="openModalPhoto()"/>
          <div id="legende">${this.title}<span id="like">${this.likes}<i class="fas fa-heart"></i></span></div>
          </div>
            `  
        }else {
       var card =  
            `
            <div class="photo_card">
            <video>
              <src="../../assets/Sample Photos/${this.video}"
              type="mp4"
              alt="">
             </video>
            <div id="legende">${this.title}<span id="like">${this.likes}<i class="fas fa-heart"></i></span></div>
            </div>
            `
        }

    const allIdLikes = document.getElementById("like");
    console.log(allIdLikes);
    const likePrice = document.getElementById('like_price');
    const totalLikesPrice = `
    <span class="total_likes" id="total_likes">
    ${this.title}
    <i class="fas fa-heart"></i
    ></span>
    <span class="price" id="price">${this.price_media}€ /jour</span>
    `
    likePrice.innerHTML = totalLikesPrice;
       return card;
    }

}


 
function openModalPhoto() {
    document.getElementById("photoModal").style.display = "block";
    document.getElementById("photoModal").innerHTML = 
    `
    <div class="modal-content">
    <span class="close" onclick="closeModalPhoto()"
      ><i class="fas fa-times"></i
    ></span>
    <span class="left"><i class="fas fa-angle-left"></i></span>
    <span class="right"><i class="fas fa-angle-right"></i></span>
    <div class="photo_content">
      <img
        src="../Sample Photosl/Travel_Tower.jpg"
        alt=""
        class="photoContent"
      />
    </div>
  </div>
    `;
}
function closeModalPhoto() {
    document.getElementById("photoModal").style.display = "none";
}

const likeClick = document.querySelectorAll(".fa-heart");
const likeCounter = document.querySelectorAll("#like");

   function  filterDate() {
        let dateFilter = document.getElementById("date");
        const filterByDate = this.date.filter(media => media.photographerId == media.date); 
    
    }

    function filterPopularity() {
        let populariteFilter = document.getElementById("popularité");
        const filterByLike = this.likes.filter(media => media.photographerId == media.likes); 

    }

    function filterTitle() {
        let titleFilter = document.getElementById("titre");
        const filterByTitle = this.title.filter(media => media.photographerId == media.title); 

    }