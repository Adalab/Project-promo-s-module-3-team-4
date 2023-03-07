import '../styles/main.scss';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import iconweb from '../images/iconoweb.png';
import icongithub from '../images/iconogithub.png';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [desc, setDesc] = useState('');
  const [autor, setAutor] = useState('');
  const [job, setJob] = useState('');
  const [mensj, setMensj] = useState('');

  const handleInput = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'slogan') {
      setSlogan(inputValue);
    } else if (inputName === 'repo') {
      setRepo(inputValue);
    } else if (inputName === 'demo') {
      setDemo(inputValue);
    } else if (inputName === 'technologies') {
      setTechnologies(inputValue);
    } else if (inputName === 'desc') {
      setDesc(inputValue);
    } else if (inputName === 'autor') {
      setAutor(inputValue);
    } else if (inputName === 'job') {
      setJob(inputValue);
    }
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    // let regex = new RegExp(/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@$_./]*$/);
    let regex = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
    if (regex.test(repo)) {
      setMensj('');
    } else {
      setMensj('Datos en el formato incorrecto');
    }
  };

  return (
    <div className="App">
      {
        <div className="container">
          <header className="header">
            <p className="text">Proyectos Molones</p>
          </header>
          <main className="main">
            <section className="preview">
              <img className="image" src={cover} alt="cover" />

              <section className="autor">
                <section className="info-project">
                  <p className="subtitle">Personal Project Card</p>
                  <hr className="line" />

                  <h2 className="title"> {name || 'Elegant Workspace'}</h2>
                  <p className="slogan">{slogan || 'Diseños Exclusivos'}</p>
                  <p className="desc">
                    {desc ||
                      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum!'}{' '}
                  </p>
                  <section className="technologies">
                    <p className="text">
                      {technologies || 'React JS, MongoDB'}
                    </p>
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
                  </section>
                </section>

                <section className="info-autor">
                  <img className="image" src={user} alt="user" />
                  <p className="job"> {job || 'Full Stack Developer'}</p>
                  <p className="name">{autor || 'Emmelie Björklund'}</p>
                </section>
              </section>
            </section>

            <form className="form">
              <h2 className="title">Información</h2>

              <section className="ask-info">
                <p className="subtitle">Cuéntanos sobre el proyecto</p>
                <hr className="line" />
              </section>

              <fieldset className="project">
                <input
                  className="input"
                  type="text"
                  placeholder="Nombre del proyecto"
                  name="name"
                  id="name"
                  onChange={handleInput}
                  value={name}
                  required
                />
                <input
                  className="input"
                  type="text"
                  name="slogan"
                  id="slogan"
                  placeholder="Slogan"
                  onChange={handleInput}
                  value={slogan}
                />
                <input
                  className="input"
                  type="text"
                  name="repo"
                  id="repo"
                  placeholder="Repo"
                  onChange={handleInput}
                  value={repo}
                  required
                />
                <span>{mensj}</span>
                <input
                  className="input"
                  type="text"
                  placeholder="Demo"
                  name="demo"
                  id="demo"
                  onChange={handleInput}
                  value={demo}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Tecnologías"
                  name="technologies"
                  id="technologies"
                  onChange={handleInput}
                  value={technologies}
                />
                <textarea
                  className="textarea"
                  type="text"
                  placeholder="Descripción"
                  name="desc"
                  id="desc"
                  onChange={handleInput}
                  value={desc}
                  required
                ></textarea>
              </fieldset>

              <section className="ask-info">
                <p className="subtitle">Cuéntanos sobre la autora</p>
                <hr className="line" />
              </section>

              <fieldset className="autor">
                <input
                  className="input"
                  type="text"
                  placeholder="Nombre"
                  name="autor"
                  id="autor"
                  onChange={handleInput}
                  value={autor}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Trabajo"
                  name="job"
                  id="job"
                  onChange={handleInput}
                  value={job}
                />
              </fieldset>

              <section className="buttons-img">
                <button className="btn">Subir foto de proyecto</button>
                <button className="btn">Subir foto de autora</button>
              </section>
              <section className="buttons-img">
                <button className="btn-large" onClick={handleClickCreateCard}>
                  Crear Tarjeta
                </button>
              </section>

              <section className="card">
                <span className=""> La tarjeta ha sido creada: </span>
                <a href="" className="" target="_blank" rel="noreferrer"></a>
              </section>
            </form>
          </main>
        </div>
      }
    </div>
  );
}

export default App;
