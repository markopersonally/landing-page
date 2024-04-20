import './Header.scss';
import Navigation from './Navigation';

const Header = () => {
    return <header id='header'>
                <Navigation/>
                <div className='home-background'></div>
                <div className='home-background-shadow'></div>
                <div className='home-title-box'>
                  <h1>markopersonally</h1>
                  <p>full-stack developer</p>
                </div>
           </header>
}

export default Header;