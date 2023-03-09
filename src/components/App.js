import '../styles/main.scss';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
import iconweb from '../images/iconoweb.png';
import icongithub from '../images/iconogithub.png';
import iconComputer from '../images/iconoComp.png'
import logo from '../images/logoCool.png';
import { useState } from 'react';

function App() {
  const [mensjR, setMensjR] = useState('');
  const [mensjD, setMensjD] = useState('');

  const [data , setData] = useState({
    // name:'' ,
    // slogan: '',
    // repo: '',
    // demo: '',
    // technologies: '',
    // desc: '', 
    // autor:'',
    // job: '',

    });

  const handleInput = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    if (inputName === 'name') {
      setData({...data,name:inputValue});
    } 
    else if (inputName === 'slogan') {
      setData({...data,slogan:inputValue});
    } else if (inputName === 'repo') {
      setData({...data,repo:inputValue});
    } else if (inputName === 'demo') {
      setData({...data,demo:inputValue});
    } else if (inputName === 'technologies') {
      setData({...data,technologies:inputValue});
    } else if (inputName === 'desc') {
      setData({...data,desc:inputValue});
    } else if (inputName === 'autor') {
      setData({...data,autor:inputValue});
    } else if (inputName === 'job') {
      setData({...data,job:inputValue});
    }
  };

  const handleClickCreateCard = (ev) => {
    //ev.preventDefault();
    // let regex = new RegExp(/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@$_./]*$/);
    let regex = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
    if (regex.test(data.repo)) {
      setMensjR('');
    } else {
      setMensjR('Datos en el formato incorrecto');
    }
    if (regex.test(data.demo) || data.demo === '' ) {
      setMensjD('');
    } else {
      setMensjD('Datos en el formato incorrecto');
    }
    if (data.name === '') {
      
    }

  };

  return (
    <div className="App">
      {
        <div className="container">
          <header className="header">
            <div className='contHeader'>
            <img className='iconComputer' src={iconComputer} alt='icono' />
            <p className="text">Cool Project Station</p>
            </div>
            <img className='logoCool' src={logo} alt='logo' />
          </header>
          <main className="main">
            <section className="preview">
              <img className="image" src={cover} alt="cover" />

              <section className="autor">
                <section className="info-project">
                  <p className="subtitle">Personal Project Card</p>
                  <hr className="line" />

                  <h2 className="title-preview"> {data.name || 'Elegant Workspace'}</h2>
                  <p className="slogan">{data.slogan || 'Diseños Exclusivos'}</p>
                  <p className="desc">
                    {data.desc ||
                      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum!'}{' '}
                  </p>
                  <section className="technologies">
                    <p className="text">
                      {data.technologies || 'React JS, MongoDB'}
                    </p>
                    <div className='div_icon'>
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
                  <div className='img'>
                  {/* <img className="image" src={user} alt="user" /> */}
                  </div>
                  <p className="job"> {data.job || 'Full Stack Developer'}</p>
                  <p className="name">{data.autor || 'Emmelie Björklund'}</p>
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
                  value={data.name}
                  required
                />
                <input
                  className="input"
                  type="text"
                  name="slogan"
                  id="slogan"
                  placeholder="Slogan"
                  onChange={handleInput}
                  value={data.slogan}
                />
                <div>
                  <input
                    className="input input-mvl"
                    type="text"
                    name="repo"
                    id="repo"
                    placeholder="Repo"
                    onChange={handleInput}
                    value={data.repo}
                    required
                  />
                  <span>{mensjR}</span>
                  <input
                    className="input input-mvl"
                    type="text"
                    placeholder="Demo"
                    name="demo"
                    id="demo"
                    onChange={handleInput}
                    value={data.demo}                    
                    />
                    <span>{mensjD}</span>
                  </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Tecnologías"
                  name="technologies"
                  id="technologies"
                  onChange={handleInput}
                  value={data.technologies}
                />
                <textarea
                  className="textarea"
                  type="text"
                  placeholder="Descripción"
                  name="desc"
                  id="desc"
                  onChange={handleInput}
                  value={data.desc}
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
                  value={data.autor}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Trabajo"
                  name="job"
                  id="job"
                  onChange={handleInput}
                  value={data.job}
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
