
import './NotFoundPage.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NotFoundPage = () => {
    return (
        <div className="App">
            <div className={'page-not-found-container'}>
                <h2>404</h2>
                <h3>Page Not Found !!</h3>
            </div>
        </div>
    );
}

export default NotFoundPage;