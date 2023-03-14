import logo from '../../images/logoCool.png';
import iconComputer from '../../images/iconoComp.png';

function Header (props) {
    return (
        <header className="header">
            <div className="contHeader">
              <img
              className='iconComputer'
              src={iconComputer}
              alt='icono'
              />
              <p className="text">Cool Project Station</p>
            </div>
            <img className="logoCool" src={logo} alt="logo" />
          </header>
    );
}
export default Header;