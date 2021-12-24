
class photographerFactory{
  constructor(photographer) {
    this.name = photographer.name
    this.id = photographer.id
    this.city = photographer.city
    this.country = photographer.country
    this.tagline = photographer.tagline
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

    const articles = 
    `<article>
      <a href = "/photographer.html?id=${this.id}">
    <img src = ${picture}></img>
    </a>
    <h2>${this.name}</h2>
    <span>${this.country} , ${this.city}</span>
     <p>${this.tagline}</p>
     <p>${this.price} €/jour</p>
    </article>`
  console.log(articles);
    return (articles); 
}
}



