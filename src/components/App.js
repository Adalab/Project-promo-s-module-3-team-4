import '../styles/main.scss';
import trash from '../images/icons8-basura-100.png';


import { useState } from 'react';
import dataApi from '../service/api';
import objectToExport from '../service/localstorege';
import Header from './header/Header';
import ImgProject from './main/preview/ImgProject';
import Card from './main/preview/Card';

function App() {
  const [mensjR, setMensjR] = useState('');
  const [mensjN, setMensjN] = useState('');
  const [url, setUrl] = useState('');
  const [hidden, setHidden] = useState(true);

  const [data, setData] = useState(
    objectToExport.get('dataLs', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image:
        'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png',
      photo: 'https://www.itmplatform.com/wp-content/uploads/33664005_m.jpg',
    })
  );

  const handleInput = (ev) => {
    objectToExport.set('dataLs', data);
    ev.preventDefault();
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    setData({ ...data, [inputName]: inputValue });
  };

  const handletrash = (ev) => {
    setData({
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image:
        'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png',
      photo: 'https://www.itmplatform.com/wp-content/uploads/33664005_m.jpg',
    });
    setHidden(true);
    setUrl('');

    objectToExport.clear('dataLs', data);
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(data).then((info) => {
      setUrl(info.cardURL);
    });
    let regex = new RegExp(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    );
    if (data.name === '') {
      setMensjN('Te falta el nombre');
    } else if (regex.test(data.repo)) {
      setMensjR('');
    } else {
      setMensjR('Datos incorrectos');
    }

    if (data.name !== '' && data.repo !== '') {
      setHidden(false);
    }
  };

  return (
    <div className="App">
      {
        <div className="container">
          <Header />
          <main className="main">
            <section className="preview">
              
              <ImgProject />
              <Card />
            </section>

            <form className="form form2">
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
                <span className="mensj">{mensjN}</span>
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

                  <input
                    className="input input-mvl"
                    type="text"
                    placeholder="Demo"
                    name="demo"
                    id="demo"
                    onChange={handleInput}
                    value={data.demo}
                  />
                </div>
                <span className="mensj">{mensjR}</span>
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
                <span className={hidden ? 'hidden' : ''}>
                  {' '}
                  La tarjeta ha sido creada:{' '}
                </span>
                <a
                  href={url}
                  className="url_create"
                  target="_blank"
                  rel="noreferrer"
                >
                  {url}
                </a>
                <img
                  src={trash}
                  alt="trash"
                  onClick={handletrash}
                  className="trash"
                />
              </section>
            </form>
          </main>
        </div>
      }
    </div>
  );
}

export default App;
