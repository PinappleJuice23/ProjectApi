import React from 'react';
import {Link} from "react-router-dom"
import './CSS/documentation.css'; // For styling

function Documentation() {
    return (
        <div className="documentation-container">
            <h1>RicoPedia Documentation</h1>

            <h2>Table of Contents</h2>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#technologies">Technologies Used</a></li>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#usage">Usage</a></li>
                <li><a href="#structure">Project Structure</a></li>
                <li><a href="#components">Components</a></li>
                <li><a href="#api">API Usage</a></li>
                <li><a href="#css">CSS Customization</a></li>
                <li><a href="#credits">Credits</a></li>
            </ul>

            <h2 id="overview">Overview</h2>
            <p>
                <strong>RicoPedia</strong> is a web application that allows users to browse and search for characters from the popular TV show "Rick and Morty." Users can search for specific characters by name and filter them based on their status, species, and gender.
            </p>

            <h2 id="features">Features</h2>
            <ul>
                <li>Search for characters by name.</li>
                <li>Filter characters by status, species, and gender.</li>
                <li>View characters in a responsive grid layout.</li>
                <li>Click on a character to view detailed information about them.</li>
                <li>Responsive design for various screen sizes.</li>
            </ul>

            <h2 id="technologies">Technologies Used</h2>
            <ul>
                <li><strong>React</strong>: For building the UI.</li>
                <li><strong>React Router</strong>: For routing between different pages.</li>
                <li><strong>CSS</strong>: For styling components.</li>
                <li><strong>Rick and Morty API</strong>: For fetching character data.</li>
            </ul>

            <h2 id="installation">Installation</h2>
            <p>Follow these steps to run the project locally:</p>
            <ol>
                <li>Clone the repository: <code>git clone https://github.com/your-username/RicoPedia.git</code></li>
                <li>Navigate to the project folder: <code>cd RicoPedia</code></li>
                <li>Install the dependencies: <code>npm install</code></li>
                <li>Run the development server: <code>npm start</code></li>
                <li>Open <code>http://localhost:3000</code> in your browser.</li>
            </ol>

            <h2 id="usage">Usage</h2>
            <p>Once the application is running, you can navigate through the following pages:</p>
            <ul>
                <li><strong>Home:</strong> Welcome page with an overview of the app.</li>
                <li><strong>Characters:</strong> Search and filter characters.</li>
                <li><strong>Character Details:</strong> Detailed information on a selected character.</li>
                <li><strong>Contact:</strong> Contact information and API documentation links.</li>
            </ul>

            <h2 id="structure">Project Structure</h2>
            <p>Here's an overview of the project directory structure:</p>
            <pre>
{`src/
├── components/
│   ├── Characters.js
│   ├── CharacterDetails.js
│   ├── Home.js
│   ├── Navbar.js
│   ├── Footer.js
│   └── Loading.js
├── CSS/
│   ├── characters.css
│   ├── home.css
│   ├── footer.css
│   └── navbar.css
└── App.js`}
            </pre>

            <h2 id="components">Components</h2>
            <ul>
                <li><strong>Navbar:</strong> Provides navigation links to different pages.</li>
                <li><strong>Home:</strong> Displays a welcoming message.</li>
                <li><strong>Characters:</strong> Displays a search input, filters, and character grid.</li>
                <li><strong>Character Details:</strong> Shows detailed info on a selected character.</li>
                <li><strong>Loading:</strong> Displays a loading spinner while data is being fetched.</li>
                <li><strong>Footer:</strong> Contains API documentation, contact, and author links.</li>
            </ul>

            <h2 id="api">API Usage</h2>
            <p>The application uses the Rick and Morty API to fetch character data. The base URL is:</p>
            <pre>https://rickandmortyapi.com/api/character</pre>
            <p>Example API call:</p>
            <pre>{`fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive&species=human')`}</pre>

            <h2 id="css">CSS Customization</h2>
            <p>Each component has its own CSS file that can be customized:</p>
            <pre>{`/CSS/
├── characters.css
├── home.css
├── footer.css
├── navbar.css`}</pre>

            <h2 id="credits">Credits</h2>
            <p>This project uses the Rick and Morty API. Author: <a href="https://github.com/PinappleJuice23">Your Name</a></p>
        </div>
    );
}

export default Documentation;
