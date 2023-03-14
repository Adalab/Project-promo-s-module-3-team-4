import iconweb from '../../../images/iconoweb.png';
import icongithub from '../../../images/iconogithub.png';


function Card () {
    return (
        <section className="autor">
                <section className="info-project">
                  <p className="subtitle">Personal Project Card</p>
                  <hr className="line" />

                  <h2 className="title-preview">
                    {' '}
                    {data.name || 'Elegant Workspace'}
                  </h2>
                  <p className="slogan">
                    {data.slogan || 'Diseños Exclusivos'}
                  </p>
                  <p className="desc">
                    {data.desc ||
                      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam,ullam culpa accusantium placeat odit corrupti ipsum!'}{' '}
                  </p>
                  <section className="technologies">
                    <p className="text">
                      {data.technologies || 'React JS, MongoDB'}
                    </p>
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
                    <img className="image" src={data.image} alt="user" />
                  </div>
                  <p className="job"> {data.job || 'Full Stack Developer'}</p>
                  <p className="name">{data.autor || 'Emmelie Björklund'}</p>
                </section>
              </section>
    );
}

export default Card;