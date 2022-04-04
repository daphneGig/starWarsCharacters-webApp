import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from './CharacterDetails.module.css';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CharactersListData from "../../assets/data/starWarsCharacters.json";
import starWarsDefaultImg from "../../utility/utility";

function CharacterDetails () {
    const {number: noteNumber} = useParams();

    /* parseInt transforms the character id string into an integer. */
    const id = parseInt(noteNumber);

    /* The filter function is applied on the CharcatersListData in order to return the current character. */
    const currentCharacter = CharactersListData.filter((character) => character.id === id)[0];

    /* State for the data taken from SWAPI API. */
    const [characterInfoSwapi, setCharacterInfoSwapi] = useState([]);

    /* State for the data taken from starwars-api (akabab) API. */
    const [characterInfoGit, setCharacterInfoGit] = useState([]);

    useEffect(() => {
        let isMounted = true;
        /* This fetch calls SWAPI API */
        fetch(`https://swapi.dev/api/people/${id}/`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setCharacterInfoSwapi(res); /* When the data are ready, the characterInfoSwapi state is updated with data. */
            })
            .catch((error) => console.log("Error"+error));

        /* This fetch calls GitHub API */
        fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
            .then(res => res.json())
            .then(res => {
                if (isMounted)
                    setCharacterInfoGit(res); /* When the data are ready, the characterInfoGit state is updated with data. */
            })
            .catch((error) => console.log("Error"+error));
        return () => {
            isMounted = false;
        }
    }, [id]);

    return (
        <>
            <Container className="d-flex justify-content-start mt-3 mb-4 mb-md-0">
                <NavLink to={`/characters`}>
                    <button type="button" className="btn app-btn">⮪  Back</button>
                </NavLink>
            </Container>
            <Container>
                <h1>Character sheet</h1>
            </Container>
            <Container>
                <div className="d-flex justify-content-evenly">
                    {id - 1 !== 0 &&
                    <NavLink className="btn app-btn" to={`/characters/${id - 1}`}>⮜</NavLink>
                    }
                    {id + 1 <= Object.keys(CharactersListData).length &&
                    <NavLink className="btn app-btn" to={`/characters/${id + 1}`}>⮞</NavLink>
                    }
                </div>
            </Container>
            <Container className="mt-5">
                <Row className="px-3">
                    <Col className={style.characterInfoCard}>
                        <Row>
                            <Col xs={12} md={6}>
                                <h2 className="app-card-title">{currentCharacter.name}</h2>
                                <div className="d-flex justify-content-center">
                                    <img className={style.imgDetail}
                                         onError={(event) => starWarsDefaultImg(event)}
                                         src={currentCharacter.image} alt={currentCharacter.name} loading="lazy" />
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <Row className="justify-content-evenly justify-content-md-start h-100">
                                    <Col xs={5} md={11} className={style.characterInfoGeneric}>
                                        <Row>
                                            <Col xs={12}>
                                                <p className="text-capitalize"><span className={style.characterInfoSubtitle}>Species:</span> {currentCharacter.species}</p>
                                            </Col>
                                            <Col xs={12}>
                                                {characterInfoGit.homeworld &&
                                                <p className="text-capitalize"><span className={style.characterInfoSubtitle}>Homeworld:</span> {characterInfoGit.homeworld}</p>
                                                }
                                            </Col>
                                            <Col xs={12}>
                                                {characterInfoSwapi.gender &&
                                                <p className="text-capitalize"><span className={style.characterInfoSubtitle}>Gender:</span> {characterInfoSwapi.gender}</p>
                                                }
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={5} md={11} className={style.characterInfoGeneric}>
                                        <Row>
                                            <Col xs={12}>
                                                {characterInfoSwapi.birth_year &&
                                                <p className="text-capitalize"><span className={style.characterInfoSubtitle}>Birth year:</span> {characterInfoSwapi.birth_year}</p>
                                                }
                                            </Col>
                                            <Col xs={12}>
                                                {characterInfoSwapi.height &&
                                                    <p><span className={style.characterInfoSubtitle}>Height:</span> {characterInfoSwapi.height}cm</p>
                                                }
                                            </Col>
                                            <Col xs={12}>
                                                {characterInfoSwapi.mass &&
                                                    <p><span className={style.characterInfoSubtitle}>Width:</span> {characterInfoSwapi.mass}kg</p>
                                                }
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} className="px-4">
                                <p className={style.characterInfoSubtitleAff}>Affiliations:</p>
                                {characterInfoGit.affiliations &&
                                    <ul className="mt-1">
                                        {characterInfoGit.affiliations.map((affiliationsItem) => {
                                            return <li key={affiliationsItem}>{affiliationsItem}</li>
                                            }
                                        )}
                                    </ul>
                                }
                            </Col>
                            <Col xs={12} md={6} className="px-4">
                                <p className={style.characterInfoSubtitleAff}>Apprentices:</p>
                                {characterInfoGit.apprentices &&
                                <ul className="mt-1">
                                    {characterInfoGit.apprentices.map((apprenticesItem) => {
                                        return <li key={apprenticesItem}>{apprenticesItem}</li>
                                        }
                                    )}
                                </ul>
                                }
                                <p className={style.characterInfoSubtitleAff}>Source:</p>
                                {characterInfoGit.wiki &&
                                    <a href={characterInfoGit.wiki} target="blank" className="d-inline-block px-1 text-decoration-underline">
                                        {currentCharacter.name} - Wookieepedia</a>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CharacterDetails;