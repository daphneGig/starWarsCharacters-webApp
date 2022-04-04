import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import style from './Home.module.css';
import CharactersListData from "../../assets/data/starWarsCharacters.json";
import CardGridApp from "../../components/CardGridApp/CardGridApp";
import {NavLink} from "react-router-dom";

function Home () {

    /* This function filters the objects (characters) of the array (CharactersListData) and saves only the first 4 in charactersListShort. This is passed as a prop to the CardGridApp component which will show only the cards of the 4 filtered characters. */
    const charactersListShort = CharactersListData.filter((character, idx) => idx<4);

    return (
        <>
            <Container className="text-center">
                <h1>Star Wars Characters App</h1>
                <h2>All the characters of the Star Wars universe</h2>
                <p className="mt-5">Discover all the characters from the six Star Wars movies:</p>
                <ul className={style.ulFilms}>
                    <li><a href="https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace" target="blank">Episode I – The Phantom Menace</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones" target="blank">Episode II – Attack of the Clones</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Star_Wars:_Episode_III_%E2%80%93_Revenge_of_the_Sith" target="blank">Episode III – Revenge of the Sith</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Star_Wars_(film)" target="blank">Episode IV – A New Hope</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/The_Empire_Strikes_Back" target="blank">Episode V – The Empire Strikes Back</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Return_of_the_Jedi" target="blank">Episode VI – Return of the Jedi</a></li>
                </ul>
            </Container>
            <Container>
                <CardGridApp charactersList={charactersListShort}
                             col={{xs:1, sm:2, md:4, lg:4, xl:4}}/>
            </Container>
            <Container className="d-flex justify-content-center mt-3">
                <NavLink to={`/characters`}>
                    <button type="button" className="btn btn-lg app-btn">Explore all</button>
                </NavLink>
            </Container>
            <Container>
                <p className="text-center">And may the force be with you!</p>
            </Container>
        </>
    );
}

export default Home;