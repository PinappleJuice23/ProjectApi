import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import "./CSS/characterdetails.css";

function CharacterDetails() {
    const [character, setCharacter] = useState(null);
    const { id } = useParams(); // Get character ID from URL params

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await response.json();
            setCharacter(result);
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };

    if (!character) {
        return <Loading />;
    }

    return (
        <div className="character-details">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
        </div>
    );
}

export default CharacterDetails;
