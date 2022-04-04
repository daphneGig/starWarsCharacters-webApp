import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import clsx from "clsx";
import CharactersListData from "../../assets/data/starWarsCharacters.json";
import CardGridApp from "../../components/CardGridApp/CardGridApp";
import TableApp from "../../components/TableApp/TableApp";

function Characters () {

    /* State for conditional rendering of the grid-table layout. */
    const [displayGrid, setDisplayGrid] = useState("true");

    /* State for the list of all filtered characters (filters species and order). */
    const [filteredList, setFilteredList] = useState(CharactersListData);

    /* --- Filter for species --- */
    /* State for for the species selected in the dropdown menu. */
    const [selectedSpecies, setSelectedSpecies] = useState("");

    /* This function updates selectedSpecies state with the value of the option selected by the user in the dropdown menu. */
    function handleSpeciesChange(event) {
        setSelectedSpecies(event.target.value);
    };

    /* This function filters characters by species (this is the real species filter). */
    function filterBySpecies(filteredData) {
        /* Avoid filtering array when selectedSpecies=“” (that is when the user selects the dropdown menu item All). */
        if (!selectedSpecies) {
            return filteredData;
        }
        /* This filter function returns only the characters (objects) of the filteredData array that have the same value of the selectedSpecies as the value of the species property. */
        const filteredCharacters = filteredData.filter(
            (character) => character.species === selectedSpecies
        );
        return filteredCharacters;
    };

    /* This useEffect applies the filterBySpecies function to CharactersListData and updates the filteredList status with the list of filtered characters (filteredData). This occurs at each variation of selectedSpecies (which is passed as dependencies) that is each time the user selects a new item in the dropdown menu. */
    useEffect(() => {
            let filteredData = filterBySpecies(CharactersListData);
            setFilteredList(filteredData);
        },
    [selectedSpecies]);

    /* --- Filter for order --- */
    /* This function reverses the order of the characters in the list. */
    function orderFunction () {
        const charactersListOrdered = [...filteredList].reverse();
        setFilteredList(charactersListOrdered);
    }

    return (
        <>
            <Container>
                <h1>Characters</h1>
                <div className="d-flex justify-content-center mb-5">
                    <button className={clsx("option", { ["active-switch"]: displayGrid } ) } onClick={() => setDisplayGrid(true)}>
                        Grid
                    </button>
                    <button className={clsx("option", { ["active-switch"]: !displayGrid } ) } onClick={() => setDisplayGrid(false)}>
                        Table
                    </button>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <select
                        id="species-input"
                        className="form-select app-select"
                        value={selectedSpecies}
                        onChange={handleSpeciesChange}
                    >
                        <option value="">All</option>
                        <option value="human">Humans</option>
                        <option value="droid">Droids</option>
                        <option value="wookiee">Wookiees</option>
                        <option value="gungan">Gungans</option>
                    </select>
                    <button className="btn app-btn app-order-btn" onClick={orderFunction}>
                        ⮃
                    </button>
                </div>
            </Container>
            <Container className="overflow-auto">
                {displayGrid ?
                    <CardGridApp charactersList={filteredList}
                                 col={{xs:1, sm:2, md:3, lg:3, xl:4}}/>
                    :
                    <TableApp charactersList={filteredList}/>
                }
            </Container>
        </>
    );
}

export default Characters;
