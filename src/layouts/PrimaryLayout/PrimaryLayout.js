import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Outlet} from "react-router-dom";
import WelcomeBar from "../../components/WelcomeBar/WelcomeBar";
import {useState} from "react";
import FavouriteTopicCard from "../../components/Cards/FavouriteTopicCard/FavouriteTopicCard";
import Modal from "../../utils/Modal/Modal";


const PrimaryLayout = ({favouriteTopics}) => {


    const [modalShow, setModalShow] = useState(false)

    const handleDisplayingModal = (modalShow) => {
        setModalShow(modalShow)
    }

    return (
        <div className="layout">
            <Header onShowModal={handleDisplayingModal}/>
            <WelcomeBar/>
            <Outlet  />
            <Modal isOpen={modalShow} title={'My Favourite Topics'}>
                <FavouriteTopicCard favouriteTopics={favouriteTopics}/>
            </Modal>
            <Footer />
        </div>
    )

}

export default PrimaryLayout;