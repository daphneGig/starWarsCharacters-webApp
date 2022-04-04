import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import starWarsBig from "../../assets/images/starWarsBig.jpg";
import starWarsANewHope from "../../assets/images/starWarsANewHope.jpg";
import starWarsThePhantomMenace from "../../assets/images/starWarsThePhantomMenace.jpg";

function Info () {
    return (
        <>
            <Container className="mb-5">
                <h1>Star Wars information</h1>
            </Container>
            <Container>
                <Row className="align-items-center justify-content-evenly mb-5">
                    <Col xs={12}>
                        <h2 className="mb-2 mb-lg-5">From movies to the Star Wars universe</h2>
                    </Col>
                    <Col xs={12} md={5}>
                        <p className="mb-4 mb-md-0">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.
                            In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.</p>
                    </Col>
                    <Col xs={12} md={5}>
                        <img className="img-fluid" src={starWarsBig} alt="Star Wars universe"/>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-evenly pt-4">
                    <Col xs={12}>
                        <h2>The Skywalker saga</h2>
                    </Col>
                    <Col xs={12} className="d-md-none">
                        <h4 className="text-center">Original trilogy</h4>
                    </Col>
                    <Col xs={8} md={4} lg={3} className="mb-3">
                        <img className="img-fluid" src={starWarsANewHope} alt="Star Wars - Episode IV: A New Hope"/>
                    </Col>
                    <Col xs={12} md={7}>
                        <h4 className="d-none d-md-block">Original trilogy</h4>
                        <p>The original trilogy is composed of: Star Wars (1977, subtitled Episode IV: A New Hope); Episode V: The Empire Strikes Back (1980); Episode VI: Return of the Jedi (1983).</p>
                        <p>The story of the original trilogy focuses on Luke Skywalker's quest to become a Jedi, his struggle with the evil Imperial agent Darth Vader, and the struggle of the Rebel Alliance to free the galaxy from the clutches of the Galactic Empire.</p>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-evenly pt-5">
                    <Col xs={12} className="d-md-none">
                        <h4 className="text-center">Prequel trilogy</h4>
                    </Col>
                    <Col xs={8} md={4} lg={3} className="mb-3 order-md-2">
                        <img className="img-fluid" src={starWarsThePhantomMenace} alt="Star Wars - Episode IV: A New Hope"/>
                    </Col>
                    <Col xs={12} md={7}>
                        <h4 className="d-none d-md-block">Prequel trilogy</h4>
                        <p>The prequel trilogy is composed of: Episode I: The Phantom Menace (1999); Episode II: Attack of the Clones (2002); Episode III: Revenge of the Sith (2005).</p>
                        <p>The trilogy begins 32 years before Episode IV and follows the Jedi training of Anakin Skywalker, Luke's father, and his eventual fall from grace and transformation into the Sith lord Darth Vader, as well as the corruption of the Galactic Republic and rise of the Empire led by Darth Sidious.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Info;