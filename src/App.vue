<template>

<!-- Nav -->
  <nav id="nav">
    <ul class="container">
      <li><a href="#top">Inicio</a></li>
      <li><a href="#work">Nosotros</a></li>
      <li><a href="#portfolio">Portafolio</a></li>
      <li><a href="#contact">Contactanos</a></li>
    </ul>
  </nav>

<!-- Home -->
  <article id="top" class="wrapper style1">
    <div class="container">
      <div class="row">
        <div class="col-4 col-5-large col-12-medium">
          <span class="image fit"><img src="../src/assets/logo.jpg" alt="" /></span>
        </div>
        <div class="col-8 col-7-large col-12-medium">
          <header>
            <h1>Bienvenidos</h1>
            <h1><strong> Autana Muebles.</strong></h1>
          </header>
          <p>Somos una empresa familiar com más de 10 años de experiencia en el rubro de la <strong>muebleria en melamina</strong>, puedes ver nuestros trabajos en nuestras redes sociales en <a href="https://www.instagram.com/autanamuebles/"> Instagram </a> tambien puede contactarnos directamente a través de nuestro <a href="https://wa.me/c/56948446060">Whatssap</a>.</p>
          <a href="#portfolio" class="button large scrolly">Portafolio</a>
        </div>
      </div>
    </div>
  </article>

<!-- Work -->
  <article id="work" class="wrapper style2">
    <div class="container">
      <header>
        <h2>Nos caracterizamos en la excelencia.</h2>
        <p>Diseñamos para el mejor aprovechamiento de espacios, con materiales de alta calidad.</p>
      </header>
      <div class="row aln-center">
        <div class="col-4 col-6-medium col-12-small">
          <section class="box style1">
            <span class="image fit"><img src="../src/assets/cocinareal.jpg" alt="" /></span>
            <h3>Remodelación de cocina</h3>
            <p>En este proyecto se cambiaron los muebles y puertas, aprovechando al maximo el espacio disponible.</p>
          </section>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <section class="box style1">
            <span class="image fit"><img src="../src/assets/desk.jpg" alt="" /></span>
            <h3>No importa el tamaña de tu proyecto</h3>
            <p>Te asesoramos para que el proyecto se ajuste lo mejor posible a tu presupuesto.</p>
          </section>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <section class="box style1">
            <span class="image fit"><img src="../src/assets/cocina3.jpg" alt="" /></span>
            <h3>Hacemos los diseños en 3d</h3>
            <p>Realizamos los diseños en 3d para que nuestros clientes puedan ver con anticipación el mueble y tengan una idea de los colores, iluminación y distribución.</p>
          </section>
        </div>
      </div>
      <footer>
        <p>Animate a consultar sin compromiso!</p>
  
      </footer>
    </div>
  </article>

<!-- Portfolio -->
  <article id="portfolio" class="wrapper style3">
    <div class="container">
      <header>
        <h2>Trabajos realizados.</h2>
        <p>Puedes tener referencias de los proyectos que hemos realizados.</p>
      </header>
      <div class="row">
        <div class="col-4 col-6-medium col-12-small">
          <article class="box style2">
            <a href="#" class="image featured"><img src="../src/assets/cocina22.jpg" alt="" /></a>
            <h3><a href="#">Remodelación </a></h3>
            <p>Buscamos el mayor aprovechamiento del espacio.</p>
          </article>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <article class="box style2">
            <a href="#" class="image featured"><img src="../src/assets/proyectos.jpg" alt="" /></a>
            <h3><a href="#">Diseños 3D</a></h3>
            <p>Le permite al cliente tener una idea clara del proyecto.</p>
          </article>
        </div>
        <div class="col-4 col-6-medium col-12-small">
          <article class="box style2">
            <a href="#" class="image featured"><img src="../src/assets/bar.jpg" alt="" /></a>
            <h3><a href="#">Trabajos a medida</a></h3>
            <p>Realizamos proyectos e ideas de pinteres, instagram o propios de nuestros clientes.</p>
          </article>
        </div>
      </div>
      <footer>
        <p>Consulta o agenda una reunion con nosotros, respondemos a la brevedad!</p>

      </footer>
    </div>
  </article>

<!-- Contact -->
  <article id="contact" class="wrapper style4">
    <div class="container medium">
      <header>
        <h2>Cotiza tu proyecto</h2>
        <p>Nos contactaremos contigo para ver los detalles de tu proyecto y agendar visita en terreno en caso de requerirlo.</p>
      </header>
      <div class="row">
        <div class="col-12">
          <form method="post" action="#">
            <div class="row">
              <div class="col-6 col-12-small">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="col-6 col-12-small">
                <input type="text" name="email" id="email" placeholder="Email" />
              </div>
              <div class="col-12">
                <input type="text" name="subject" id="subject" placeholder="Subject" />
              </div>
              <div class="col-12">
                <textarea name="message" id="message" placeholder="Message"></textarea>
              </div>
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Mensaje" email="autanamuebles@gmail.com"/></li>
                  <li><input type="reset" value="Eliminar datos" class="alt" /></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12">
          <hr />
          <h3>Find me on ...</h3>
          <ul class="social">
            <li><a href="https://www.instagram.com/autanamuebles/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="https://wa.me/c/56948446060" class="icon brands fa-whatssap"><span class="label">Whatssap</span></a></li>
            
            
          </ul>
          <hr />
        </div>
      </div>
      <footer>
        <ul id="copyright">
          <li>&copy; Autana muebles. Todos los derechos reservados.</li>
        </ul>
      </footer>
    </div>
  </article>
</template>

<script setup>



</script>