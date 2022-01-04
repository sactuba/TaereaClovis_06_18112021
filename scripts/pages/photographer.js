//Mettre le code JavaScript lié à la page photographer.html
 

async function displayPhotographeMedia() {  
  await filterPhoto( );

} 
 
displayPhotographeMedia();

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
         const likePrice = document.getElementById('like_price');
         const totalLikesPrice = `
         <span class="total_likes" id="total_likes">
         ${this.title}
         <i class="fas fa-heart"></i
         ></span>
         <span class="price" id="price">${this.price}€ /jour</span>
         `
         likePrice.innerHTML = totalLikesPrice;
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

      let thisLikes = [this.likes];
      console.log(thisLikes);
      for( let i = 0; i = thisLikes.length; i++) {
         /* console.log(thisLikes);  */
      }
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
    return card;
}

}



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
  
  const photoSection = document.getElementById('photo');
  const photographer = data.photographers.filter(photographer => photographer.id == id)[0];
  const filterPhotos = data.media.filter(media => media.photographerId == photographer.id);
  
  const photographerInfoMain = new PhotographerPage(photographer);
  photographerInfoMain.infoPhotographer();
  
  if(value === 'popularity') {
    photosTag = filterPhotos.sort((a,b) => b.likes - a.likes); 
  } else if(value === 'titre') {
    photosTag = filterPhotos.sort((a,b) => b.title > a.title);
  } else {
    photosTag = filterPhotos.sort((a,b) => b.date < a.date);   
  } 
  
 photosTag.forEach(media => { 
    const photographerMedia = new PhotographerMediaPhoto(media);
    const cardPhotoDom =  photographerMedia.mediaPhotographer();
    photoSection.innerHTML += cardPhotoDom;
  });
  
  console.log(photosTag);
  
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
       src="../../assets/Sample Photos/Animals_Majesty.jpg"
       alt=""
       class="photoContent"
     />
     <span class="modal_title" id="modalTitle">Titre</span>
   </div>
 </div>
   `;
}



function closeModalPhoto() {
    document.getElementById("photoModal").style.display = "none";
}

document.addEventListener('keydown', e =>{
  console.log(e);
})