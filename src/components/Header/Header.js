
import './Header.css'
import '../../css/varibels.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../utils/Button/Button";
import {primaryButtonStyles} from "../../utils/Button/ButtonStyles";
import {useTheme} from "../../contexts/ThemeContext";
import {useMediaQuery} from "../../Hooks/useMediaQuery";
const Header = (props) => {

    const { onShowModal} = props

    const [modalShow, setModalShow] = useState(false)

    const {theme ,toggleDarkMode } = useTheme();
    const screenWidthMatches = useMediaQuery('(max-width: 425px)')

    const handleDisplayingModalLocal = () => {
        setModalShow(!modalShow)
        onShowModal(modalShow)
    }

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/">
                    <h1>Web Topics</h1>
                </Link>

                <div className="header-btns">
                    <Button
                    label={`${theme === 'light' ? '☾' : '☼'} ${screenWidthMatches ? '' :  theme === 'light' ? 'Dark Mode' : 'Light Mode'}`}
                    ariaLabel={"dark mode"}
                    onClick={toggleDarkMode}
                    style={primaryButtonStyles}
                    />

                    <Button
                    label={`♡  ${screenWidthMatches ? '' : 'Favourites'}`}
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