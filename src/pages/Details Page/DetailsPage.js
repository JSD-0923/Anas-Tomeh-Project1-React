
import './DetailsPage.css'
import Header from "../../components/Header/Header";
import {useParams} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import DetailTopic from "../../components/Detail Topic/DetailTopic";
const DetailsPage = ({toggleDarkMode, isDarkModeTheme, onFavouriteTopics, onShowModal}) => {



    return (
        <>
            <Header
                toggleDarkMode={toggleDarkMode}
                isDarkModeTheme={isDarkModeTheme}
                onShowModal={onShowModal}
            />
            <DetailTopic onFavouriteTopics={onFavouriteTopics}/>
            <Footer/>
        </>
    )
}

export default DetailsPage;