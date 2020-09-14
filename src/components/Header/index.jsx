import React from "react";

import { Container, Header, Toobar } from "./styles";

function Header() {
    return (
        <Container>
            <Header>
                <Toobar>
                    <div>
                        <span>Starsbook</span>
                    </div>
                    <div>
                        <button>Novo Post</button>
                        <span>img1</span>
                        <span>img2</span>
                    </div>
                </Toobar>
            </Header>
        </Container>
    );
}

export default Header;
