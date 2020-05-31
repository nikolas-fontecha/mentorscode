<template>
  <div>
    <main>
      <div class="navegador">
        <nav>
          <ul>
            <li>
              <router-link to="">
                <a href="">Desarrollo de software</a>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <a href="">Marketing</a>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <a href="">Diseño UX/UI</a>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <a href="">Otras</a>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="buscador">
        <input type="text" placeholder="  Buscar" />
      </div>
      <div class="videos">
        <ul>
          <li>
            <div class="video">
              <div class="miniatura">
                <img src="../assets/iniciado/woman.jpg" />
              </div>
              <div class="descrip">
                <h2>Programacion Web</h2>
                <p>Por Sergio Rubiano</p>
                <button>Ver la mentoria</button>
              </div>
            </div>
          </li>
          <li>
            <div class="video">
              <div class="miniatura">
                <img src="../assets/iniciado/woman.jpg" />
              </div>
              <div class="descrip">
                <h2>Programacion Web</h2>
                <p>Por Sergio Rubiano</p>
                <button>Ver la mentoria</button>
              </div>
            </div>
          </li>
          <li>
            <div class="video">
              <div class="miniatura">
                <img src="../assets/iniciado/woman.jpg" />
              </div>
              <div class="descrip">
                <h2>Programacion Web</h2>
                <p>Por Sergio Rubiano</p>
                <button>Ver la mentoria</button>
              </div>
            </div>
          </li>
          <li>
            <div class="video">
              <div class="miniatura">
                <img src="../assets/iniciado/woman.jpg" />
              </div>
              <div class="descrip">
                <h2>Programacion Web</h2>
                <p>Por Sergio Rubiano</p>
                <button>Ver la mentoria</button>
              </div>
            </div>
          </li>
          <li>
            <div class="video">
              <div class="miniatura">
                <img src="../assets/iniciado/woman.jpg" />
              </div>
              <div class="descrip">
                <h2>Programacion Web</h2>
                <p>Por Sergio Rubiano</p>
                <button>Ver la mentoria</button>
              </div>
            </div>
          </li>
          <li>
            <div class="video">
              <div class="miniatura">
                <img src="../assets/iniciado/woman.jpg" />
              </div>
              <div class="descrip">
                <h2>Programacion Web</h2>
                <p>Por Sergio Rubiano</p>
                <button>Ver la mentoria</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

main {
  background: #f2f2f5;
}
.navegador nav ul {
  display: flex;
  list-style: none;

  justify-content: center;
  margin-top: 0px;
  padding-top: 25px;
}
.navegador nav ul li a {
  padding: 30px;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #757980;
}
.buscador {
  display: flex;
  justify-content: flex-end;
  margin-right: 15%;
  flex-direction: row;
}
.buscador input {
  border-radius: 5px;
  border-color: #757980;
  background-color: white;
  width: 300px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 10px;
}
.videos ul li {
  width: 350px;
  height: 370px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 40px;
  border-radius: 10px;
  background: white;
  transition: all 0.3s linear;
}
.videos ul {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.video {
  display: flex;
  flex-direction: column;
}
.miniatura {
  width: 350px;
  height: 250px;
}
.descrip {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 118px;
}
.descrip h2 {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 20;
  color: #0047d4;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 5px;
}

.descrip p {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 10;
  color: #0000008f;
  opacity: 1;
  margin-top: 0px;
  margin-left: 20px;
  margin-bottom: 7px;
}
.descrip button {
  width: 80%;
  margin-left: 10%;
  border: none;
  background: #f26900;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 15px;
  cursor: pointer;
}
.miniatura img {
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0px 0px;
}
ul li:hover {
  box-shadow: 3px 3px 20px #00000069;
  cursor: pointer;
  transition: all 0.3s linear;
}
</style>
