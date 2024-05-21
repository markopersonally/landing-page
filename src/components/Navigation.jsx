import './Navigation.scss';

const Navigation = () => {
    return (
        <nav id='navBar'>
            <ul className='navBar-box'>
                <li className='navBar-home'><a href="#header">home</a></li>
                <li className='navBar-aboutMe'><a href="#about-me">about me</a></li>
                <li className='navBar-myprojects'><a href="#projects">my projects</a></li>
                <li className='navBar-skills'><a href="#section-skills">my skills</a></li>
                <li className='navBar-contact'><a href="#contact">contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;