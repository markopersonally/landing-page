import './Navigation.scss';

const Navigation = () => {
    return (
        <nav id='navBar'>
            <ul className='navBar-box'>
                <li className='navBar-home'><a href="#home">home</a></li>
                <li className='navBar-aboutMe'><a href="#aboutMe">about me</a></li>
                <li className='navBar-myprojects'><a href="#myprojects">my projects</a></li>
                <li className='navBar-contact'><a href="#contact">contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;