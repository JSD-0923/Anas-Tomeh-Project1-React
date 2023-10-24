
import './Modal.css'
import {useState} from "react";
import VerticalSpace from "../VerticalSpace";
import Button from "../Button/Button";
import {cancelButtonStyles} from "../Button/ButtonStyles";
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
                    <Button
                    label={'\u00D7'}
                    ariaLabel={'Close Modal'}
                    onClick={handleDisplayingModal}
                    style={cancelButtonStyles}
                    />
                </div>
                <VerticalSpace/>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
}

export default Modal;