import './CSS/home.css';
import Footer from "./Footer";

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to RicoPedia</h1>
            <div className="welcome-message">
                <p>Website for characters from the TV show <em>Rick and Morty</em>!</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
