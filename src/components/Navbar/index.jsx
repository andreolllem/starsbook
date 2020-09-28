import React from "react";

import { Container, Nav } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
    root: {
        width: 200,
        height: 200,
        display: "flex",
        margin: "0 auto",
    },
});

const list = [
    {
        id: 1,
        user: {
            nome: "Carolina Minni",
            area: "Make and Hair",
            ultimojob: "Elenven Inc.",
            avatar: "/img/avatars/caro.jpg",
        },
    },
];

function Navbar() {
    const classes = useStyles();

    return (
        <Container>
            <Nav>
                <Avatar
                    className={classes.root}
                    style={{ color: "#189300" }}
                    src="/img/avatars/caro.jpg"
                />
                <h3>Apresentação</h3>
                <div>
                    {list.map((item) => (
                        <ul key={item.id} user={item.user}>
                            <li>Nome: {item.user.nome} </li>
                            <li>Área de atuação: {item.user.area} </li>
                            <li>Último Job: {item.user.ultimojob} </li>
                        </ul>
                    ))}
                </div>
            </Nav>
        </Container>
    );
}

export default Navbar;
