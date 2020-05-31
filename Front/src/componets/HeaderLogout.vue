<template>
    <div>
        <div class="container">
            <img src="../assets/home/font-header.svg" />
            <nav>
                <ul>
                    <li>
                        <h2>Mentors Code</h2>
                    </li>
                    <li class="top">
                        <a class="mentoria" href="">
                            Mentorias
                        </a>
                        <div class="separador"></div>
                        <a class="empieza" href="">
                            Empieza
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="modal-register">
            <div class="content">
                <div class="imagen">
                    <h2>Bienvenido, únete hoy a nuestro grupo de Meetens</h2>
                    <img src="../assets/home/sesion.svg" />
                </div>
                <div class="formulario">
                    <div class="close" id="close">+</div>
                    <form>
                        <div class="input">
                            <p>Nombre</p>
                            <input type="text" name="" id="">
                        </div>
                        <div class="input">
                            <p>E-mail</p>
                            <input type="email" name="" id="">
                        </div>
                        <div class="input">
                            <p>Contraseña</p>
                            <input type="password" name="" id="">
                        </div>
                    </form>
                </div>
                
            </div>
        </div>   
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.content{
    width:700px;
    height: 500;
    display:flex;
    flex-direction: row;
}

.imagen{
    width:50%;
    height: 100%;
}

.formulario{
    width:50%;
    height: 100%;
}

.mentoria{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-decoration: none;
    padding-right: 16px;
    color:#ffffff;
}

.empieza{
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    text-decoration: none;
    color:#ffffff;
    background-color:#F26900;
    margin-left: 16px;
    width: 130px;
    text-align: center;
}

.top{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.separador{
    height: 38px;
    width: 0px;
    border-right: 1px solid #ffffff;
}

.container{
    width: 100%;
    height: 660px;
    position: relative;
    
}

.container img{
    display:block;
    position: relative;
    width: inherit;
    height: auto;
    top: -8px;
}

.container p{
    position:absolute;
    top:0px;
    color: #fff;
}

nav{
    position: absolute;
    width: 100%;
    top:16px;
    
}

nav ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    outline-color: 1px solid white;
}

nav ul li h2{
    font-size: 34px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color:#fff;
    font-style: italic;
}



</style>