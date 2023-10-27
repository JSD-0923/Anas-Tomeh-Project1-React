
import './Header.css'
import '../../css/varibels.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import MoonIcon from "../../assets/Icons/MoonIcon";
import SunIcon from "../../assets/Icons/SunIcon";
import HeartIcon from "../../assets/Icons/HeartIcon";
const Header = ({toggleDarkMode, isDarkModeTheme, onShowModal}) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isDarkMode, setIsDarkMode] = useState(isDarkModeTheme);
    const [modalShow, setModalShow] = useState(false)

    const handleDarkModeToggle = () => {
        toggleDarkMode();
        setIsDarkMode(!isDarkMode)
    }

    const handleDisplayingModalLocal = () => {
        setModalShow(!modalShow)
        onShowModal(modalShow)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {setScreenWidth(window.innerWidth)})

    }, [])

    return (
        <header className="header">
            <div className="header-first-part">
               <Link to={'/Anas-Tomeh-Project1-React'}>
                   <h1>Web Topics</h1>
               </Link>
                <div className="header-btns">
                        <button className="button"  aria-label="dark mode" onClick={handleDarkModeToggle}>
                            {!isDarkMode ? <MoonIcon height={'20px'}/> : <SunIcon/>}  {screenWidth < 425 ? '' :  !isDarkMode ? 'Dark Mode' : 'Light Mode'}
                        </button>

                        <button className="button" aria-label="favourite" onClick={handleDisplayingModalLocal} >
                            <HeartIcon width={'20px'}/> {screenWidth < 425 ? '' : 'Favourites'}
                        </button>
                </div>
            </div>
            <div className="header-second-part">
                <section className="top-page-design" aria-label="header design">
                    <div className="triangle"></div>
                    <div className="triangle-2"></div>
                </section>
                <section className="welcome-title" aria-label="welcome title">
                    <h2>Welcome to our website!</h2>
                    <p>We have a new design that's fresh, modern, and easy to use.</p>
                </section>
            </div>
        </header>
    )
}

export default Header;