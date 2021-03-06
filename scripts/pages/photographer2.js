
    class Api {
      constructor(url) {
          this.url = url;
      }
  
      async get(){
             return fetch(this.url)
             .then(res => res.json())
             .then(res => res.data)
             .catch(err => console.log("an error occurs", err));      
      }
  }


       class AppApi extends Api {
       constructor(url) {     
         super(url);
       } 
 
       async getData() {
         return await this.get();
       }
     }

  class App {
    constructor() {
       this.$elsWrapper = document.getElementById('photo');  
       this.AppApi = new AppApi("../../data/photographers.json")
    }

    async main() {
      const elsData = await this.AppApi.getData();
      elsData.foreach((media) => {
        const template = new PhotographerMediaPhoto(media);
        this.$elsWrapper.appendChild(template.mediaPhotographer());
        console.log(template);
      })
    }
  }

  const app = new App();
  app.main();  
  //console.log(app); 

  class FactoryPattern {
    constructor(media){
    if(image === undefined) {
      return new PhotographerMediaVideo(media);
    } else if(video === undefined) {
      return new PhotographerMediaPhoto(media);
    } else {
      throw 'Unknow format type';
    }
    }
  }

  class PhotographerMediaPhoto {
    constructor(media) {
        this.media = media
    }
    mediaPhotographer() {
         let cardImage;
         cardImage =  
            `
           <div class="photo_card">
           <img id="cardId" src="../../assets/Sample Photos/${this.media.image}" alt="" onclick="openModalPhoto()"/>
           <div id="legende">${this.media.title}<span id="like">${this.media.likes}<i class="fas fa-heart"></i></span></div>
           </div>
            `  
    return cardImage;
}

}

class PhotographerMediaVideo {
    constructor(media) {
        this.media = media
    }
    mediaPhotographer() {
         let cardVideo;
         cardVideo =  
            `
            <div class="photo_card">
            <video id="cardId" src="../../assets/Sample Photos/${this.media.video}" type="video/mp4" controls ></video>
            <div id="legende">${this.media.title}<span id="like">${this.media.likes}<i class="fas fa-heart"></i></span></div>
            </div>
            `
    return cardVideo;
} 
}