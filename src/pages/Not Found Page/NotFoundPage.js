
import './NotFoundPage.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NotFoundPage = ({toggleDarkMode, isDarkModeTheme, onShowModal}) => {
    return (
        <div className="App">
            <Header
                toggleDarkMode={toggleDarkMode}
                isDarkModeTheme={isDarkModeTheme}
                onShowModal={onShowModal}
            />
            <div className={'page-not-found-container'}>
                <h2>404</h2>
                <h3>Page Not Found !!</h3>
            </div>
            <Footer/>
        </div>
    );
}

export default NotFoundPage;