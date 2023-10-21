
import './LoadingIndicator.css';

const LoadingIndicator = ({message}) => {

    return (
        <div className="loading-indicator">
            <div className="loader"></div>
            <h3>{message || 'Data are Loading ...'} </h3>
        </div>
    )
}

export default LoadingIndicator;