/* SECCIÓN DE IMPORT */
import logo from '../images/logoCool.png';
import iconComputer from '../images/iconComp.png';
import iconweb from '../images/iconweb.png';
import icongithub from '../images/icongithub.png';
import user from '../images/user.jpeg';

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function Landing() {
  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return <div className="App">
{/* 
<header className="header">
    <div className="contHeader">
        <section className="contHeader__oneSection">
        <img
        className='iconComputer'
        src={iconComputer}
        alt='icono'
        />
        <p className="text">Cool Project Station</p>
        </section>
        <img className="logoCool" src={logo} alt="logo" />
    </div>
    <div className="header__text">
        <h1 className="header__title">Cool Projects Station</h1>
        <h2 className="header__subtitle">Escaparate en línea para recoger ideas a traves de la tecnología.</h2>
        <form className="header__form">
        <button className='btn'>NUEVO PROYECTO</button>
        <button className='btn'>VER PROYECTOS</button>
        </form>
    </div>
</header>
<main className='main'>
    <section className="autor autOne">
        <section className="info-project">
            <p className="subtitle">Personal Project Card</p>
            <hr className="line" />

            <h2 className="title-preview">Elegant Workspace</h2>
            <p className="slogan">Diseños Exclusivos</p>
            <p className="desc">
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum!
            </p>
            <section className="technologies">
            <p className="text">React JS, MongoDB</p>
            <div className="div_icon">
                <a className="icon" href="" target="_blank">
                <img
                    src={icongithub}
                    title="enlace a repositorio"
                    alt="icono repositorio"
                    className="icon"
                />
                </a>
                <a className="icon" href="" target="_blank">
                <img
                    src={iconweb}
                    title="enlace a web"
                    alt="icono web"
                    className="icon"
                />
                </a>
            </div>
            </section>
        </section>

        <section className="info-autor">
            <div className="img">
            <img className="image" src={user} alt="user" />
            </div>
            <p className="job">Full Stack Developer</p>
            <p className="name">Emmelie Björklund</p>
        </section>
    </section>


    <section className="autor autTwo">
        <section className="info-project">
            <p className="subtitle">Personal Project Card</p>
            <hr className="line" />

            <h2 className="title-preview">Elegant Workspace</h2>
            <p className="slogan">Diseños Exclusivos</p>
            <p className="desc">
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum!
            </p>
            <section className="technologies">
            <p className="text">React JS, MongoDB</p>
            <div className="div_icon">
                <a href="" target="_blank">
                <img
                    src={icongithub}
                    title="enlace a repositorio"
                    alt="icono repositorio"
                    className="icon"
                />
                </a>
                <a href="" target="_blank">
                <img
                    src={iconweb}
                    title="enlace a web"
                    alt="icono web"
                    className="icon"
                />
                </a>
            </div>
            </section>
        </section>

        <section className="info-autor">
            <div className="img">
            <img className="image" src={user} alt="user" />
            </div>
            <p className="job">Full Stack Developer</p>
            <p className="name">Emmelie Björklund</p>
        </section>
    </section>
    <section className="autor autThree">
        <section className="info-project">
            <p className="subtitle">Personal Project Card</p>
            <hr className="line" />

            <h2 className="title-preview">Elegant Workspace</h2>
            <p className="slogan">Diseños Exclusivos</p>
            <p className="desc">
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum!
            </p>
            <section className="technologies">
            <p className="text">React JS, MongoDB</p>
            <div className="div_icon">
                <a href="" target="_blank">
                <img
                    src={icongithub}
                    title="enlace a repositorio"
                    alt="icono repositorio"
                    className="icon"
                />
                </a>
                <a href="" target="_blank">
                <img
                    src={iconweb}
                    title="enlace a web"
                    alt="icono web"
                    className="icon"
                />
                </a>
            </div>
            </section>
        </section>

        <section className="info-autor">
            <div className="img">
            <img className="image" src={user} alt="user" />
            </div>
            <p className="job">Full Stack Developer</p>
            <p className="name">Emmelie Björklund</p>
        </section>
    </section>
    <section className="autor autFour">
        <section className="info-project">
            <p className="subtitle">Personal Project Card</p>
            <hr className="line" />

            <h2 className="title-preview">Elegant Workspace</h2>
            <p className="slogan">Diseños Exclusivos</p>
            <p className="desc">
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum!
            </p>
            <section className="technologies">
            <p className="text">React JS, MongoDB</p>
            <div className="div_icon">
                <a href="" target="_blank">
                <img
                    src={icongithub}
                    title="enlace a repositorio"
                    alt="icono repositorio"
                    className="icon"
                />
                </a>
                <a href="" target="_blank">
                <img
                    src={iconweb}
                    title="enlace a web"
                    alt="icono web"
                    className="icon"
                />
                </a>
            </div>
            </section>
        </section>

        <section className="info-autor">
            <div className="img">
            <img className="image" src={user} alt="user" />
            </div>
            <p className="job">Full Stack Developer</p>
            <p className="name">Emmelie Björklund</p>
        </section>
    </section>
</main>
<footer className='footer'>
<img className='iconComputer' src={iconComputer} alt='icono'/>
<span>&copy Module-3: Project Team 4</span>
</footer> */}

 </div>;
}


export default Landing;