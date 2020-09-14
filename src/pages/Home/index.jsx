import React from "react";

import { Container, Main, Feed, Navbar } from "./styles";

function Home() {
    return (
        <Container>
            <Main>
                <Navbar>navbar</Navbar>
                <Feed>feed</Feed>
            </Main>
        </Container>
    );
}

export default Home;
