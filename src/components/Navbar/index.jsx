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

const list = [{ id: 1, nome: "Carolina Minni" }];

function Navbar() {
    const classes = useStyles();

    return (
        <Container>
            <Nav>
                <Avatar
                    className={classes.root}
                    style={{ color: "#189300" }}
                    src="/broken-image.jpg"
                />
                <h3>Apresentação</h3>
                <div>
                    {list.map((item) => (
                        <ul key={item.id}>
                            <li>Nome: {item.nome} </li>
                        </ul>
                    ))}
                </div>
            </Nav>
        </Container>
    );
}

export default Navbar;
