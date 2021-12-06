//Mettre le code JavaScript lié à la page photographer.html

/* async function contenuData() {
    const photographersContenu = document.querySelector(".photographer_contenu");
    fetch('../data/photographers.json')
    .then(response => response.json())
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        this.users = json;
        //console.log(this.users);
    })
    .catch(function () {
        this.dataError = true;
    })
    .then(data => {
    data.media.forEach((medias) => {
        const photographer =  new photographerContenu(medias) ;
        const userDOM = photographer.getUserDOM();
        photographersContenu.appendChild(userDOM);
    });
})
       .catch(error => console.error(error.message));
};                                                                        

async function initUser() {
    // Récupère les datas des photographes
    contenuData();
};

initUser();

class photographerContenu{
    constructor(medias) {
        this.id = medias.id
      this.photographerId = medias.photographerId
      this.title = medias.title
      this.image = medias.image
      this.likes = medias.likes
      this.date = medias.date
      this.price = medias.price 
    }
    
     getUserDOM() {
      const picture = `assets/Sample photo/${this.image}`;
      const  a = document.createElement( 'a' );
      const article = document.createElement( 'article' );
      const img = document.createElement( 'img' );
      const span = document.createElement( 'span' );  
      const p = document.createElement( 'p' );
      const prix = document.createElement( 'p' );
      prix.className = "prix";
      img.setAttribute('href', "photographer.html"); 
      img.setAttribute("src", picture)
      span.textContent = this.title;
      p.textContent = this.likes;
      prix.textContent = this.price + ' €/jour';
          a.appendChild(article);
      article.appendChild(img);
      article.appendChild(span); 
      article.appendChild(p);
      article.appendChild(prix);
      return (article); 
  }
  } */
 async function displayContenu() {
let response = await fetch('../../assets/Sample Photos/Mimi/Animals_Rainbow.jpg');
let blob = await response.blob();
console.log(response);
let contenu = document.querySelector(".photographer_contenu");
let img = document.createElement('img');
contenu.appendChild(img);
img.src = URL.createObjectURL(blob);
}

displayContenu();