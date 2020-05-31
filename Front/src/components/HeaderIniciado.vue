<template>
  <div>
    <header>
      <div class="container-header">
        <div class="logo">
          <h1>Mentors Code</h1>
        </div>
        <div class="menu">
          <nav>
            <ul>
              <li>
                <router-link to="">
                  <a href="">Seguidos</a>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <a href="">Mentorias</a>
                </router-link>
              </li>
              <li>
                <div class="separador-vertical"></div>
              </li>
              <li>
                <router-link to="">
                  <img src="../assets/header/carita.svg" />
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

header {
  width: 100%;
  height: 80px;
  background: white;
}
.logo h1 {
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 34px;
  font-weight: 900 italic;
}
.logo {
  padding-left: 350px;
  margin-right: 15%;
}
.menu nav ul {
  display: flex;
  list-style: none;
  padding-right: 350px;
  margin-left: 15%;
}
.menu nav ul li {
  display: flex;
  align-items: center;
  margin: 15px;
}
.menu nav ul li a {
  display: flex;
  text-decoration: none;
  color: black;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 20px;
}
.container-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.separador-vertical {
  width: 3px;
  height: 45px;
  background: black;
}
</style>
