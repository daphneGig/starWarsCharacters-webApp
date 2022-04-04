import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import { NavLink } from 'react-router-dom';
import style from './CardApp.module.css';
import starWarsDefaultImg from "../../utility/utility";

function CardApp (props) {
    const {id, image, name, species} = props;

    return (
        <NavLink to={`/characters/${id}`}>
            <Card className={style.appCard}>
                <CardImg className={style.appCardImg} top width="100%" src={image} alt={name}
                         onError={(event) => starWarsDefaultImg(event)}/>
                <div className={style.appCardInfo}>
                    <h5 className={style.appCardTitle}>{name}</h5>
                    <p className="card-text text-capitalize">{species}</p>
                </div>
            </Card>
        </NavLink>
    );
}

export default CardApp;