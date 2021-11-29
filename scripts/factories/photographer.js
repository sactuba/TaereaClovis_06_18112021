  function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
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
        span.textContent = country + ', ' + city ;
        p.textContent = tagline;
        prix.textContent = price + ' €/jour';
        h2.textContent = name;
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(span);
        article.appendChild(p);
        article.appendChild(prix);

        return (article);
    }
    return { name, portrait,city, country, tagline, price, getUserCardDOM }
}

