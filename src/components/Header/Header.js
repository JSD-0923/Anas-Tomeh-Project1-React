
import './Header.css'
import '../../css/varibels.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import WelcomeBar from "../WelcomeBar/WelcomeBar";
import Button from "../../utils/Button/Button";
import {primaryButtonStyles} from "../../utils/Button/ButtonStyles";
import {useTheme} from "../../contexts/ThemeContext";
const Header = (props) => {

    const { onShowModal} = props

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [modalShow, setModalShow] = useState(false)

    const {theme ,toggleDarkMode } = useTheme();

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
                    label={`${theme === 'dark' ? '☾' : '☼'} ${screenWidth < 425 ? '' :  theme === 'dark' ? 'Dark Mode' : 'Light Mode'}`}
                    ariaLabel={"dark mode"}
                    onClick={toggleDarkMode}
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