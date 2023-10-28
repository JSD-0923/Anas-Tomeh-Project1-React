import './App.css';

import HomePage from "./pages/Home Page/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailsPage from "./pages/Details Page/DetailsPage";
import {useEffect, useState} from "react";
import Modal from "./utils/Modal/Modal";
import FavouriteTopicCard from "./components/Cards/FavouriteTopicCard/FavouriteTopicCard";
import NotFoundPage from "./pages/Not Found Page/NotFoundPage";
import {useTheme} from "./contexts/ThemeContext";
import PrimaryLayout from "./layouts/PrimaryLayout/PrimaryLayout";

function App() {

    const [favouriteTopics, setFavouriteTopics] = useState([]);

    const {theme} = useTheme()

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

    useEffect(() => {
        const storedFavouriteTopics = JSON.parse(localStorage.getItem('favouriteTopics')) || [];
        setFavouriteTopics(storedFavouriteTopics);
    }, []);
    return (
        <div className={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<PrimaryLayout favouriteTopics={favouriteTopics}/>}>
                        <Route exact path="/" element={<HomePage/>}
                        />
                        {/*Anas-Tomeh-Project1-React is added for the path for deploying using GitHub pages*/}
                        <Route exact path="/details/:id" element={<DetailsPage onFavouriteTopics={handelFavouriteTopics}/>}
                        />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
