const titulo = document.getElementById('titulo')
console.log(titulo)
titulo.innerHTML = "<h1>Nuestro Catálogo de Ofertas</h1>"


const contenedorProductos = document.querySelector('.container .row')

stockProductos.forEach((producto) => {

  const div = document.createElement('div')
  div.classList.add('card')
  div.id = `${producto.id}`

  div.innerHTML = `
                  <section class="card__item">
                  <div class="card__content">
                    <figure class="card__picture">
                      <img src="${producto.img}" class="card__img" alt=""/>
                    </figure>
                    <div class="card__texts">
                      <h2 class="card__title">${producto.nombre}</h2>
                      <p class="card__paragraph">${producto.desc}</p>
                      <p class="card__price">Precio:   $${producto.precio}</p>
                      <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>
                  </div>
                </section>
               `

  contenedorProductos.append(div)
})