import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/Table";
import style from './TableApp.module.css';
import {NavLink} from 'react-router-dom';
import starWarsDefaultImg from "../../utility/utility";

function TableApp (props) {
    const {charactersList} = props;

    /* This function creates a row of the table for each object (character) of the array charactersList. The row shows: the character's id, his image, his name, his species and a button to go to his information sheet. */
    const charactersTr = charactersList.map((character) => {
        return (
            <tr key={character.id}>
                <td>{character.id}</td>
                <td>
                    <NavLink to={`/characters/${character.id}`}>
                        <img className={style.imgTable} loading="lazy"
                             onError={(event) => starWarsDefaultImg(event)}
                             src={character.image}
                             alt={character.name} />
                    </NavLink>
                </td>
                <td>
                    <NavLink to={`/characters/${character.id}`}>
                        {character.name}
                    </NavLink>
                </td>
                <td className="text-capitalize">{character.species}</td>
                <td>
                    <NavLink to={`/characters/${character.id}`}>
                        <div className={style.appBtnTable}>⮞</div>
                    </NavLink>
                </td>
            </tr>
        );
    });

    return (
        <Table className={style.appTable}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Species</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {charactersTr}
            </tbody>
        </Table>
    );
}

export default TableApp;