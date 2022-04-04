import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

function NoMatch (props) {
    return (
        <>
            <Container>
                <h1>404, there is nothing here!</h1>
                <h4 className="text-center">Check the url you entered and try again. May the force be with you!</h4>
            </Container>
        </>
    );
}

export default NoMatch;