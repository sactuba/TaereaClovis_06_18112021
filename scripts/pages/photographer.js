//Parcourir les different select de l'option et récuperé la value
const filterTag = document.getElementById("order_by");
filterTag.addEventListener('change', function(){
  const value = filterTag.value;
  filterPhoto(value);
});


//Mettre le code JavaScript lié à la page photographer.html
async function filterPhoto(value) {
  const url =  new URLSearchParams(document.location.search);
  const id = url.get('id');
  let response = await fetch('../../data/photographers.json');
  let data = await response.json();
  
  //Filtrer les photos par rapport a Id des photographe 
  let totalLikes = 0;
  const photoSection = document.getElementById('photo');
  const photographer = data.photographers.filter(photographer => photographer.id == id)[0];
  const photographersMedias = data.media.filter(media => media.photographerId == photographer.id);
  photographersMedias.forEach(media => {totalLikes += media.likes});  
  /* console.log(totalLikes); */


  //Initialisation des données photographer du fichier Json 
  const photographerInfoMain = new PhotographerPage(photographer);
  photographerInfoMain.infoPhotographer();

  
    //Element du Modal
  const carrousel = new PhotgrapherCarrousel(photographersMedias);
  carrousel.displayCarrouselPhoto();

  //Filtrer les photo par rapport aux value 
  let photosTag;
    if(value === 'popularity') {
      photosTag = photographersMedias.sort((a,b) => b.likes - a.likes);             
    } else if(value === 'titre') {
      photosTag = photographersMedias.sort();
    } else {
      photosTag = photographersMedias.sort((a,b) => b.date - a.date); 
    } 

    // Récuperé le total des likes par photographe
    const likeTag = document.getElementById("total_likes");
    likeTag.textContent = totalLikes;
    
  
    photosTag.forEach(media => { 
      const photographerMedia = new PhotographerMediaPhoto(media);
      const cardPhotoDom =  photographerMedia.mediaPhotographer();
      photoSection.innerHTML += cardPhotoDom;
    });
    //console.log(photosTag );
    


    const likeClick = document.querySelectorAll('.fa-heart');
    console.log(likeClick);
    for(let i = 0; i = likeClick.length; i++) {
      likeClick.addEventListener("click",likeIncremente(), false);
    }
      /*   
  let reviews = document.getElementsByClassName("modal-content");
  if(review>=reviews.length){ 
      review=0;
      rev=0;
  }
  if(review<0){
      review=reviews.length-1;
      rev=reviews.length-1;
  }
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviews[review].style.display="block"; */

     return {}
}   
 
async function displayPhotographeMedia(value) {
     filterPhoto(value);
} 
 
displayPhotographeMedia();

function likeIncremente() {
alert("hello");
}
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
          return (info, photoMain, totalLikesPrice  );
    }
}


    //Fonction incrementation des likes


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
      //Afficher Card adapter pour photo ou video en vérifiant si video == undefined
         let card;
         let card2;
        if(this.video == undefined) {
         card =  
            `
           <div class="photo_card">
           <img id="cardId" src="../../assets/Sample Photos/${this.image_media}" alt="" onclick="openModalPhoto()"/>
          <div id="legende">${this.title}<span id="like">${this.likes}<i class="fas fa-heart"></i></span></div>
          </div>
            `  
        }else {
        card =  
            `
            <div class="photo_card">
            <video id="cardId" src="../../assets/Sample Photos/${this.video}" type="video/mp4" controls ></video>
            <div id="legende">${this.title}<span id="like">${this.likes}<i class="fas fa-heart"></i></span></div>
            </div>
            `
        }  
   
    return card;
}

}

class PhotgrapherCarrousel {
  constructor(media) {
    this.image = media.image
    this.title = media.title
  }
    //Afficher le m odal des photo quand on clique dessus en récuperant les donnée dans les media
   displayCarrouselPhoto() {
    const cardCaraoussel = document.getElementById("photoModal").innerHTML = 
    ` 
    <div class="modal-content">
    <span class="close" onclick="closeModalPhoto()"
      ><i class="fas fa-times"></i
    ></span>
    <span class="left"><i class="fas fa-angle-left" onclick="previousReview()"></i></span>
    <span class="right"><i class="fas fa-angle-right" onclick="nextReview()"></i></span>
    <div class="photo_content">
      <img
          "../../assets/Sample Photos/${this.image_media}"
          alt=""
          class="photoContent"
      />
      <span class="modal_title" id="modalTitle">${this.title}</span>
    </div>
  </div>
    `; 
    return cardCaraoussel;  
   } 
}

class photographerFactory {
  constructor(photographer,)
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

 