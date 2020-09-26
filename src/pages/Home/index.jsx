import React from "react";
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import Navbar from "../../components/Navbar";

import { Container, Main } from "./styles";

function Home() {
    return (
        <Container>
            <Header />
            <Main>
                <Navbar />
                <Feed />
            </Main>
        </Container>
    );
}

export default Home;
