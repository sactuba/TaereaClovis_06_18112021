//Mettre le code JavaScript lié à la page photographer.html
 

async function displayPhotographeMedia(value) {

    filterPhoto("popularity");

} 
 
displayPhotographeMedia();

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
         const likePrice = document.getElementById('like_price');
         const totalLikesPrice = `
         <span class="total_likes">
         <span id="total_likes"></span>
         <i class="fas fa-heart"></i></span>
         <span class="price" id="price">${this.price}€ /jour</span>
         `
         likePrice.innerHTML = totalLikesPrice;
          return (info, photoMain);
    }
}


    //Fonction incrementation des likes
    const likeClick = document.querySelectorAll('#like');
    console.log(likeClick);
/*     likeClick.addEventListener("click", function() {
      this.likes ++;
    }); */
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
      // Récuperé le total des likes par photographe
      var allLikes = photosTag.map(a => a.likes).reduce((prev, curr) => prev + curr, 0);
      let likeId = document.getElementById('total_likes');
      likeId.textContent = allLikes;
      

      //Afficher Card adapter pour photo ou video en vérifiant si video == undefined
         let card;
        if(this.video == undefined) {
         card =  
            `
           <div class="photo_card">
           <img src="../../assets/Sample Photos/${this.image_media}" alt="" onclick="openModalPhoto()"/>
          <div id="legende">${this.title}<span id="like">${this.likes}<i class="fas fa-heart"></i></span></div>
          </div>
            `  
        }else {
        card =  
            `
            <div class="photo_card">
            <video src="../../assets/Sample Photos/${this.video}" type="video/mp4" controls></video>
            <div id="legende">${this.title}<span id="like">${this.likes}<i class="fas fa-heart"></i></span></div>
            </div>
            `
        }
   
        //Afficher le modal des photo quand on clique dessus en récuperant les donnée dans les media
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
            src="../../assets/Sample Photos/${this.image_media}"
            alt=""
            class="photoContent"
          />
          <span class="modal_title" id="modalTitle">${this.title}</span>
        </div>
      </div>
        `;
    return card;
}

}


//Parcourir les different select de l'option et récuperé la value
const filterTag = document.getElementById("order_by");
filterTag.addEventListener('change', function(){
  const value = filterTag.value;
  filterPhoto(value);
});

async function filterPhoto(value) {
  const url =  new URLSearchParams(document.location.search);
  const id = url.get('id');
  let response = await fetch('../../data/photographers.json');
  let data = await response.json();
  
  //Filtrer les photos par rapport a Id des photographe 
  const photoSection = document.getElementById('photo');
  const photographer = data.photographers.filter(photographer => photographer.id == id)[0];
  const filterPhotos = data.media.filter(media => media.photographerId == photographer.id);
  
  //Initialisation des données photographer du fichier Json 
  const photographerInfoMain = new PhotographerPage(photographer);
  photographerInfoMain.infoPhotographer();
  
  //Filtrer les photo par rapport aux value 
    if(value === 'popularity') {
      photosTag = filterPhotos.sort((a,b) => a.likes - b.likes);
    } else if(value === 'titre') {
      photosTag = filterPhotos.sort((a,b) => a.title - b.title);
    } else {
      photosTag = filterPhotos.sort(); 
    } 
  
  
  //Initialisation des donnée media du fichier Json
  photosTag.forEach(media => { 
    const photographerMedia = new PhotographerMediaPhoto(media);
    const cardPhotoDom =  photographerMedia.mediaPhotographer();
    photoSection.innerHTML += cardPhotoDom;
  });
  /* console.log(photosTag); */
  
}          


//Ouvrir le Modal
 function openModalPhoto() {
  document.getElementById("photoModal").style.display = "block";  
 }

 //Ferme le Modal
 function  closeModalPhoto() {
    document.getElementById("photoModal").style.display = "none";
 }


/* document.addEventListener('keydown', e =>{
  console.log(e);
}) */