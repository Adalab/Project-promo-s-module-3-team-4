import trash from '../images/icons8-basura-100.png';
import { useState } from 'react';
import dataApi from '../service/api';
import objectToExport from '../service/localstorege';
import Header from './header/Header';
import ImgProject from './main/preview/ImgProject';
import station from '../images/station.png';
import Card from './main/preview/Card';
import Buttons from './main/form/Buttons';
import InputProject from './main/form/InputProject';
import InputAuthor from './main/form/InputAuthor';
import GetAvatar from './main/preview/GetAvatar';
import Profile from './main/preview/Profile';
import '../styles/mixins.scss';
import '../styles/App.scss';

const CreateProject = () => {
  const [mensjRepo, setMensjRepo] = useState('');
  const [mensjName, setMensjName] = useState('');
  const [url, setUrl] = useState('');
  const [hidden, setHidden] = useState(true);
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

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
      setMensjName('Te falta el nombre');
    } else if (regex.test(data.repo)) {
      setMensjRepo('');
    } else {
      setMensjRepo('Datos incorrectos');
    }

    if (data.name !== '' && data.repo !== '') {
      setHidden(false);
    }
  };

  // const isValidForm = () => {
  //
  //   if (
  //     name !== '' &&
  //     email !== '' &&
  //     paymentType !== '' &&
  //     legalTerms === true
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <div className="App">
      {
        <div className="container">
          <Header />
          <main className="main">
            <section className="preview">
              <ImgProject />
              <Card data={data} />
            </section>

            <form className="form form2">
              <h2 className="title">Información</h2>

              <section className="ask-info">
                <p className="subtitle">Cuéntanos sobre el proyecto</p>
                <hr className="line" />
              </section>

              <InputProject
                data={data}
                handleInput={handleInput}
                mensjName={mensjName}
                mensjRepo={mensjRepo}
              />

              <section className="ask-info">
                <p className="subtitle">Cuéntanos sobre la autora</p>
                <hr className="line" />
              </section>

              <InputAuthor handleInput={handleInput} data={data} />

              <section className="buttons-img">
                <Buttons value={'Subir foto de proyecto'} className={'btn'} />
                <Buttons className={'btn'} value={'Subir foto de autora'} />
                <div>
                  <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
                  <Profile avatar={avatar} />
                </div>
              </section>
              <section className="buttons-img">
                <Buttons
                  className={'btn-large'}
                  value={'Crear tarjeta'}
                  handleClick={handleClickCreateCard}
                  // disabled={isValidFor()}
                />
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
          <footer className="land-footer">
            <img className="land-logoCool" src={station} alt="icono" />
            <span className="land-copy">&copy Module-3: Project Team 4</span>
          </footer>
        </div>
      }
    </div>
  );
};

export default CreateProject;
