
import './Header.css'
import '../../css/varibels.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import WelcomeBar from "../WelcomeBar/WelcomeBar";
import Button from "../../utils/Button/Button";
import {primaryButtonStyles} from "../../utils/Button/ButtonStyles";
const Header = (props) => {

    const {toggleDarkMode, isDarkModeTheme, onShowModal} = props

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
            <div className="header-container">
                <Link to="Anas-Tomeh-Project1-React/">
                    <h1>Web Topics</h1>
                </Link>

                <div className="header-btns">
                    <Button
                    label={`${!isDarkMode ? '☾' : '☼'} ${screenWidth < 425 ? '' :  !isDarkMode ? 'Dark Mode' : 'Light Mode'}`}
                    ariaLabel={"dark mode"}
                    onClick={handleDarkModeToggle}
                    style={primaryButtonStyles}
                    />

                    <Button
                    label={`♡  ${screenWidth < 425 ? '' : 'Favourites'}`}
                    ariaLabel={"favourite"}
                    onClick={handleDisplayingModalLocal}
                    style={primaryButtonStyles}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;