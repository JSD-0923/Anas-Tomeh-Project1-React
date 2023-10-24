import './App.css';

import HomePage from "./pages/Home Page/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailsPage from "./pages/Details Page/DetailsPage";
import {useEffect, useState} from "react";
import Modal from "./utils/Modal/Modal";
import FavouriteTopicCard from "./components/Cards/FavouriteTopicCard/FavouriteTopicCard";
import NotFoundPage from "./pages/Not Found Page/NotFoundPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WelcomeBar from "./components/WelcomeBar/WelcomeBar";

function App() {

    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const [isDarkModeTheme, setIsDarkModeTheme] = useState(true);
    const [favouriteTopics, setFavouriteTopics] = useState([]);
    const [modalShow, setModalShow] = useState(false)

    const handelFavouriteTopics = (topic) => {
        const isTopicInFavourites = favouriteTopics.some((storedTopic) => {
            if (topic) {
                return   storedTopic.id === topic.id
            }
        });

        if (isTopicInFavourites) {
            const updatedFavourites = favouriteTopics.filter((favTopic) => favTopic.id !== topic.id);
            setFavouriteTopics(updatedFavourites);
            localStorage.setItem('favouriteTopics', JSON.stringify(updatedFavourites));
        } else {
            const updatedFavourites = [topic, ...favouriteTopics];
            setFavouriteTopics(updatedFavourites);
            localStorage.setItem('favouriteTopics', JSON.stringify(updatedFavourites));
        }
    };


    const handleDisplayingModal = (modalShow) => {
        setModalShow(modalShow)
    }


    useEffect(() => {
        const storedFavouriteTopics = JSON.parse(localStorage.getItem('favouriteTopics')) || [];
        setFavouriteTopics(storedFavouriteTopics);
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            setIsDarkModeTheme(false)
        }
    }, []);

    const toggleDarkMode = () => {
        const body = document.body;
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode.toString());
    };

    return (
        <>
            <BrowserRouter>
            <Header
                toggleDarkMode={toggleDarkMode}
                isDarkModeTheme={isDarkModeTheme}
                onShowModal={handleDisplayingModal}
            />
            <WelcomeBar/>

                <Routes>
                    {/*Anas-Tomeh-Project1-React is added for the path for deploying using GitHub pages*/}
                    <Route exact path="Anas-Tomeh-Project1-React/" element={<HomePage/>}
                    />
                    {/*Anas-Tomeh-Project1-React is added for the path for deploying using GitHub pages*/}
                    <Route exact path="Anas-Tomeh-Project1-React/details/:id" element={<DetailsPage onFavouriteTopics={handelFavouriteTopics}/>}
                    />
                    <Route path="*" element={<NotFoundPage/>} />
                </Routes>


            <Footer/>
            <Modal isOpen={modalShow} title={'My Favourite Topics'}>
                <FavouriteTopicCard favouriteTopics={favouriteTopics}/>
            </Modal>
            </BrowserRouter>
        </>
    );
}

export default App;
