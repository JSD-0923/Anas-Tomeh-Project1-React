
import './WelcomeBar.css'

const WelcomeBar = () => {

    return (
        <div className="welcome-bar">
            <section className="top-page-design" aria-label="header design">
                <div className="triangle"></div>
                <div className="triangle-2"></div>
            </section>
            <section className="welcome-title" aria-label="welcome title">
                <h2>Welcome to our website!</h2>
                <p>We have a new design that's fresh, modern, and easy to use.</p>
            </section>
        </div>
    )
}

export default WelcomeBar;