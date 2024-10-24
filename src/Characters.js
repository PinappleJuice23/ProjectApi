import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./CSS/characters.css";  // Include the CSS file

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState(""); // New state for status filter
    const [speciesFilter, setSpeciesFilter] = useState(""); // New state for species filter
    const [genderFilter, setGenderFilter] = useState(""); // New state for gender filter
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(""); // Error handling state

    useEffect(() => {
        fetchAllCharacters();
    }, [statusFilter, speciesFilter, genderFilter]); // Refetch when filters change

    const handleSearch = () => {
        if (searchTerm.trim()) {
            fetchAllCharacters(searchTerm.toLowerCase());
        }
    };

    const fetchAllCharacters = async (term = "") => {
        setIsLoading(true);
        setError(""); // Reset error
        let allCharacters = [];
        let page = 1;
        let totalPages = 1;

        try {
            while (page <= totalPages) {
                // Build URL with pagination and optional filters
                let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
                if (term) url += `&name=${term}`;
                if (statusFilter) url += `&status=${statusFilter}`;
                if (speciesFilter) url += `&species=${speciesFilter}`;
                if (genderFilter) url += `&gender=${genderFilter}`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();
                allCharacters = [...allCharacters, ...result.results]; // Merge results
                totalPages = result.info.pages; // Update total pages
                page++;
            }
            setCharacters(allCharacters);
        } catch (error) {
            console.error("Error occurred:", error);
            setError("Failed to load characters.");
            setCharacters([]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="characters-page">
            {isLoading && <Loading />}
            <div className="filters-container">
                {/* Search Input */}
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search characters..."
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">SEARCH</button>

                {/* Status Filter */}
                <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)} 
                    className="filter-select"
                >
                    <option value="">All Statuses</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>

                {/* Species Filter */}
                <select 
                    value={speciesFilter} 
                    onChange={(e) => setSpeciesFilter(e.target.value)} 
                    className="filter-select"
                >
                    <option value="">All Species</option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                    <option value="robot">Robot</option>
                    <option value="mythological">Mythological Creature</option>
                </select>

                {/* Gender Filter */}
                <select 
                    value={genderFilter} 
                    onChange={(e) => setGenderFilter(e.target.value)} 
                    className="filter-select"
                >
                    <option value="">All Genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>

            {/* Error Message */}
            {error && <p className="error-message">{error}</p>}

            {/* Display the Characters */}
            <div className="characters-grid">
                {characters.length > 0 ? (
                    characters.map((character) => (
                        <div key={character.id} className="character-card">
                            <Link to={`/character/${character.id}`}>
                                <img src={character.image} alt={character.name} className="character-image" />
                                <p className="character-name">{character.name}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No characters found.</p>
                )}
            </div>
        </div>
    );
}

export default Characters;
