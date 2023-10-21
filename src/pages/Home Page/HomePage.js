
import './HomePage.css'
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
const HomePage = ({toggleDarkMode, isDarkModeTheme, onShowModal}) => {


    return (
        <div className="App">
            <Header
                toggleDarkMode={toggleDarkMode}
                isDarkModeTheme={isDarkModeTheme}
                onShowModal={onShowModal}
            />
            <div className={'main'}>
                <Main/>
            </div>
            <Footer/>
        </div>
    );

}


export default HomePage;