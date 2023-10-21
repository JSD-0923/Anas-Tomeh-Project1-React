
import './Modal.css'
import {useState} from "react";
import VerticalSpace from "../VerticalSpace";
const Modal = ({ isOpen, title, children }) => {
    const [modalShow, setModalShow] = useState(true)

    const handleDisplayingModal = () => {
        setModalShow(!modalShow)
    }
    if (!isOpen || !modalShow) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={handleDisplayingModal} aria-label="Close Modal">
                        &times;
                    </button>
                </div>
                <VerticalSpace/>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
}

export default Modal;