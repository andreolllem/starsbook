import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell } from "react-feather";
import Avatar from "@material-ui/core/Avatar";

import { Container, Toobar } from "./styles";

function Header() {
    return (
        <Container>
            <header>
                <Toobar>
                    <div>
                        <h1>Starsbook</h1>
                    </div>
                    <div className="user-section">
                        <button>Novo Post</button>
                        <SvgIcon className="bell">
                            <Bell style={{ fill: "#189300" }} />
                        </SvgIcon>
                        <Avatar
                            style={{ color: "#189300" }}
                            className="avatar"
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                        />
                    </div>
                </Toobar>
            </header>
        </Container>
    );
}

export default Header;
