<template>
    <div>
        <div class="container-body">
            <div class="left">
                <h2>Rompiendo los paradigmas de la programación</h2>
                <p>Queremos fomentar la igualdad de género en el ámbito
                    de la programación, nuestros mentores son 50% mujeres,
                    50% hombres.
                </p>
                <a class="ya" href="">Empieza Ya!</a>
            </div>
            <div class="rigth">
                <img src="../assets/home/font-body.jpg" />
            </div>     
        </div>
        <div class="testimonios">
            <h2>Testimonios de nuestros Meetens:</h2>
            <div class="cards">
                <ul>
                    <li>
                        <div class="arriba">
                            <img src="../assets/home/comilla-izquierda.svg" />
                        </div>
                        <p>
                            El aprendizaje de Mentors Code ha sido un gran lugar para comenzar aprender a programas.
                            ¡Mi hermana y yo empezamos hace más de un año y hasta ahora ha sido realmente bueno! Hemos
                            tenido 3 tutores diferentes. Nos preocupaba que la transición no fuera fácil, !pero funcionó¡
                            En general. ¡ha sido una experiencia maravillosa!
                        </p>
                        <div class="abajo">
                            <img src="../assets/home/comilla-derecha.svg" />
                        </div>
                    </li>
                    <li>
                        <div class="arriba">
                            <img src="../assets/home/comilla-izquierda.svg" />
                        </div>
                        <p>
                            El aprendizaje de Mentors Code ha sido un gran lugar para comenzar aprender a programas.
                            ¡Mi hermana y yo empezamos hace más de un año y hasta ahora ha sido realmente bueno! Hemos
                            tenido 3 tutores diferentes. Nos preocupaba que la transición no fuera fácil, !pero funcionó¡
                            En general. ¡ha sido una experiencia maravillosa!
                        </p>
                        <div class="abajo">
                            <img src="../assets/home/comilla-derecha.svg" />
                        </div>
                    </li>
                    <li>
                        <div class="arriba">
                            <img src="../assets/home/comilla-izquierda.svg" />
                        </div>
                        <p>
                            El aprendizaje de Mentors Code ha sido un gran lugar para comenzar aprender a programas.
                            ¡Mi hermana y yo empezamos hace más de un año y hasta ahora ha sido realmente bueno! Hemos
                            tenido 3 tutores diferentes. Nos preocupaba que la transición no fuera fácil, !pero funcionó¡
                            En general. ¡ha sido una experiencia maravillosa!
                        </p>
                        <div class="abajo">
                            <img src="../assets/home/comilla-derecha.svg" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="slogan">
            <h2>Tu futuro lo creas HOY!</h2>
            <a class="ya" href="">Empieza Ya!</a>
        </div>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
.container-body{
    width: 100%;
    height: auto;
    outline-color: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}

.left{
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 40%;
}

.left h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;
    color:#001847;
    width: 100%;
    margin-top:50px;
}

.left p{
    margin-top:48px;
    font-family: 'Open Sans', sans-serif;
    font-size: 26px;
    font-weight: 400;
    color:#001847;
    width: 90%;
}

.ya{
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    text-decoration: none;
    color:#ffffff;
    background-color:#F26900;
    width: 175px;
    padding: 7px 10px;
    text-align: center;
    margin:36px auto;
}

.rigth{
    width: 600px;
    height: 430px;
}

.rigth img{
    position: relative;
    width: 100%;
    height: auto;
}

.testimonios{
    background-color:#F2F2F5;
    height: 670px;
}

.testimonios h2{
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;
    color:#001847;
    width: 100%;
    text-align: center;
    padding-top: 62px;
}

.testimonios ul{
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    margin-top:62px;
}

.testimonios ul li{
    width: 450px;
    height: 430px;
    background-color:#fff;
    margin-left:50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 6px #00000029;
}

.arriba{
    height: 85%;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
}

.abajo{
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column-reverse;
    height: 85%;
    padding-right:30px ;
}

.testimonios ul li p{
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color:#001847;
    width: 70%;
    margin: 0 auto;
}

.slogan h2{
    width:100%;
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color:#001847;
    text-align:center;
    margin-top:60px;
}

.slogan a{
    display: block;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    text-decoration: none;
    color:#ffffff;
    background-color:#F26900;
    width: 175px;
    padding: 7px 10px;
    text-align: center;
    margin:16px auto;
    margin-bottom: 50px;
}

</style>