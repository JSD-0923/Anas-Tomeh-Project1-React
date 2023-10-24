
import './DetailsPage.css'
import Header from "../../components/Header/Header";
import {useParams} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {useEffect, useState} from "react";
import DetailTopic from "../../components/Detail Topic/DetailTopic";
import WelcomeBar from "../../components/WelcomeBar/WelcomeBar";
const DetailsPage = ({ onFavouriteTopics}) => {



    return (
        <>
            <DetailTopic onFavouriteTopics={onFavouriteTopics}/>
        </>
    )
}

export default DetailsPage;