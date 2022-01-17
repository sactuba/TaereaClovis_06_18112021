/* class PhotographerMediaPhoto {
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

} */