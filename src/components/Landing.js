/* SECCIÓN DE IMPORT */
import '../styles/landing.scss';
import station from '../images/station.png';
import iconComputer from '../images/iconoComp.png';
import iconweb from '../images/iconoweb.png';
import icongithub from '../images/iconogithub.png';
import defaultAvatar from '../images/defaultAvatar.png';
import { Link } from 'react-router-dom';
//import objectToExport from '../service/localstorege';
//import Card from './main/preview/Card';

/* SECCIÓN DEL COMPONENTE */
function Landing() {
  return (
    <div className="Landing">
      <header className="land-header">
        <div className="land-contHeader">
          <section className="land-contHeader__oneSection">
            <img className="land-iconComputer" src={iconComputer} alt="icono" />
            <p className="land-text">Cool Project Station</p>
          </section>
          <img className="land-logoCool" src={station} alt="logo" />
        </div>
        <div className="land-header__text">
          <h1 className="land-header__title">Cool Projects Station</h1>
          <h2 className="land-header__subtitle">
            Escaparate en línea para recoger ideas a traves de la tecnología.
          </h2>
          <form className="land-header__form">
            <button className="land-btnNew">
              <Link className="btnNewTxt" to="/CreateProject">
                NUEVO PROYECTO
              </Link>
            </button>
            <button className="land-btnSee">
              <Link className="btnSeeTxt" to="/">
                VER PROYECTOS
              </Link>
            </button>
          </form>
        </div>
      </header>
      <main className="land-main">
        <section className="land-autor autOne">
          <section className="land-info-project">
            <p className="land-subtitle">Personal Project Card</p>
            <hr className="land-line" />

            <h2 className="land-title-preview">Elegant Workspace</h2>
            <p className="land-slogan">Diseños Exclusivos</p>
            <p className="land-desc">
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              delectus? Voluptates at hic aliquam porro ad suscipit harum
              laboriosam saepe earum doloribus aperiam,ullam culpa accusantium
              placeat odit corrupti ipsum!
            </p>
            <section className="land-technologies">
              <p className="land-textTec">React JS - HTML - CSS</p>
              <div className="land-div_icon">
                <a className="land-icon" href="./" target="_blank">
                  <img
                    src={icongithub}
                    title="enlace a repositorio"
                    alt="icono repositorio"
                    className="land-iconGH"
                  />
                </a>
                <a className="land-icon" href="./" target="_blank">
                  <img
                    src={iconweb}
                    title="enlace a web"
                    alt="icono web"
                    className="land-iconWB"
                  />
                </a>
              </div>
            </section>
          </section>

          <section className="land-info-autor">
            <div className="land-img">
              <img className="land-image" src={defaultAvatar} alt="user" />
            </div>
            <p className="land-job">Full Stack Developer</p>
            <p className="land-name">Emmelie Björklund</p>
          </section>
        </section>
        <section className="land-autor autTwo">
          <section className="land-info-project">
            <p className="land-subtitle">Personal Project Card</p>
            <hr className="land-line" />

            <h2 className="land-title-preview">Elegant Workspace</h2>
            <p className="land-slogan">Diseños Exclusivos</p>
            <p className="land-desc">
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              delectus? Voluptates at hic aliquam porro ad suscipit harum
              laboriosam saepe earum doloribus aperiam,ullam culpa accusantium
              placeat odit corrupti ipsum!
            </p>
            <section className="land-technologies">
              <p className="land-textTec">React JS - HTML - CSS</p>
              <div className="land-div_icon">
                <a className="land-icon" href="./" target="_blank">
                  <img
                    src={icongithub}
                    title="enlace a repositorio"
                    alt="icono repositorio"
                    className="land-iconGH"
                  />
                </a>
                <a className="land-icon" href="./" target="_blank">
                  <img
                    src={iconweb}
                    title="enlace a web"
                    alt="icono web"
                    className="land-iconWB"
                  />
                </a>
              </div>
            </section>
          </section>

          <section className="land-info-autor">
            <div className="land-img">
              <img className="land-image" src={defaultAvatar} alt="user" />
            </div>
            <p className="land-job">Full Stack Developer</p>
            <p className="land-name">Emmelie Björklund</p>
          </section>
        </section>
        <section className="land-autor autThree">
          <section className="land-info-project">
            <p className="land-subtitle">Personal Project Card</p>
            <hr className="land-line" />

            <h2 className="land-title-preview">Elegant Workspace</h2>
            <p className="land-slogan">Diseños Exclusivos</p>
            <p className="land-desc">
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              delectus? Voluptates at hic aliquam porro ad suscipit harum
              laboriosam saepe earum doloribus aperiam,ullam culpa accusantium
              placeat odit corrupti ipsum!
            </p>
            <section className="land-technologies">
              <p className="land-textTec">React JS - HTML - CSS</p>
              <div className="land-div_icon">
                <a className="land-icon" href="./" target="_blank">
                  <img
                    src={icongithub}
                    title="enlace a repositorio"
                    alt="icono repositorio"
                    className="land-iconGH"
                  />
                </a>
                <a className="land-icon" href="./" target="_blank">
                  <img
                    src={iconweb}
                    title="enlace a web"
                    alt="icono web"
                    className="land-iconWB"
                  />
                </a>
              </div>
            </section>
          </section>

          <section className="land-info-autor">
            <div className="land-img">
              <img className="land-image" src={defaultAvatar} alt="user" />
            </div>
            <p className="land-job">Full Stack Developer</p>
            <p className="land-name">Emmelie Björklund</p>
          </section>
        </section>
        <section className="land-autor autFour">
          <section className="land-info-project">
            <p className="land-subtitle">Personal Project Card</p>
            <hr className="land-line" />

            <h2 className="land-title-preview">Elegant Workspace</h2>
            <p className="land-slogan">Diseños Exclusivos</p>
            <p className="land-desc">
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              delectus? Voluptates at hic aliquam porro ad suscipit harum
              laboriosam saepe earum doloribus aperiam,ullam culpa accusantium
              placeat odit corrupti ipsum!
            </p>
            <section className="land-technologies">
              <p className="land-textTec">React JS - HTML - CSS</p>
              <div className="land-div_icon">
                <a className="land-icon" href="./" target="_blank">
                  <img
                    src={icongithub}
                    title="enlace a repositorio"
                    alt="icono repositorio"
                    className="land-iconGH"
                  />
                </a>
                <a className="land-icon" href="./" target="_blank">
                  <img
                    src={iconweb}
                    title="enlace a web"
                    alt="icono web"
                    className="land-iconWB"
                  />
                </a>
              </div>
            </section>
          </section>

          <section className="land-info-autor">
            <div className="land-img">
              <img className="land-image" src={defaultAvatar} alt="user" />
            </div>
            <p className="land-job">Full Stack Developer</p>
            <p className="land-name">Emmelie Björklund</p>
          </section>
        </section>
      </main>
      <footer className="land-footer">
        <img className="land-logoCool" src={station} alt="icono" />
        <span className="land-copy">&copy Module-3: Project Team 4</span>
      </footer>
    </div>
  );
}

export default Landing;
