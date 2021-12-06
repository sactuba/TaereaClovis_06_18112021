
class photographerFactory{
  constructor(photographer) {
    this.name = photographer.name
    this.id = photographer.id
    this.city = photographer.city
    this.country = photographer.country
    this.tageline = photographer.tageline
    this.price = photographer.price
    this.portrait = photographer.portrait 
  }
  
/*   get name() {
    return this.name
  }
  get city() {
    return this.city
  }
  get country() {
    return this_country
  }
  get tageline() {
    return this.tageline
  }
  get price() {
    return this.price
  }
  get portrait() {
    return this.portrait
  } */

   getUserCardDOM() {
    const picture = `assets/photographers/${this.portrait}`;
    const  a = document.createElement( 'a' );
    const article = document.createElement( 'article' );
    const img = document.createElement( 'img' );
    const h2 = document.createElement( 'h2' );
    const span = document.createElement( 'span' );  
    const p = document.createElement( 'p' );
    const prix = document.createElement( 'p' );
    prix.className = "prix";
    img.setAttribute('href', "photographer.html"); 
    img.setAttribute("src", picture)
    span.textContent = this.country + ', ' + this.city ;
    p.textContent = this.tagline;
    prix.textContent = this.price + ' €/jour';
    h2.textContent = this.name;
    a.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(span); 
    article.appendChild(p);
    article.appendChild(prix);
/*     const card = `
    <a href="#">
    <article>
    <img src = ${picture}></img>
    <h2>{this.name}</h2>
    <span>${this.country} , ${this.city}</span>
     <p>${this.tageline}</p>
     <p>${this.price} €/jour</p>
    </article>
    </a>; */
    return (article); 
}
}



