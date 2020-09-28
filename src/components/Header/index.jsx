import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell } from "react-feather";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Container, Toobar, CardActionArea, CardAction } from "./styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            background: "#242526",
            border: "1px solid #3a3b3c",
            borderRadius: 8,
        },
    },

    avatar: {
        ".MuiSvgIcon-root": {
            display: "flex",
        },
    },
}));

function Header({ post }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
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
                            style={{
                                color: "#189300",
                                width: 40,
                                height: 40,
                                cursor: "pointer",
                            }}
                            className="avatar"
                            alt="Remy Sharp"
                            src="/img/avatars/caro.jpg"
                            onClick={handleClick}
                        />

                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            className={classes.root}
                        >
                            <CardActionArea>
                                <div className="perfil">
                                    <Avatar
                                        style={{
                                            color: "#189300",
                                            width: 50,
                                            height: 50,
                                            cursor: "pointer",
                                        }}
                                        className="avatar"
                                        alt="Remy Sharp"
                                        src="/img/avatars/caro.jpg"
                                    />
                                    <h1>Carolina Minni</h1>
                                </div>
                                <div>
                                    <p>Ver seu perfil</p>
                                </div>
                            </CardActionArea>
                            <CardAction className={classes.avatar}>
                                <ExitToAppIcon />
                                <h1>Sair</h1>
                            </CardAction>
                            <hr />
                        </Popover>
                    </div>
                </Toobar>
            </header>
        </Container>
    );
}

export default Header;
