import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardApp from "../CardApp/CardApp";

function CardGridApp (props) {
    const {charactersList, col} = props;

    /* This function creates a CardApp component for each object (character) of the array charactersList. CardApp component shows: the character's id, his image, his name and his species. This information are passed as props to the CardApp component. */
    const charactersCardsCol = charactersList.map((character) => {
        return (
            <div key={character.id} className="col">
                <CardApp
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                />
            </div>
        );
    });

    return (
        <div className={`row 
                        row-cols-${col.xs} 
                        row-cols-sm-${col.sm}
                        row-cols-md-${col.md}
                        row-cols-lg-${col.lg} 
                        row-cols-xl-${col.xl}`} >
            {charactersCardsCol}
        </div>
    );
}

export default CardGridApp;