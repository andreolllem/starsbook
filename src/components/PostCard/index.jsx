import React from "react";

import {
    Container,
    Typography,
    TypographyDate,
    CardContent,
    CardActionArea,
    CardAction,
    TypographyLike,
    TypographyComment,
} from "./styles";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

function PostCard({ post }) {
    return (
        <Container>
            <CardHeader
                avatar={<Avatar src={post.autor.avatar} />}
                title={<Typography>{post.autor.name}</Typography>}
                subheader={<TypographyDate>{post.date}</TypographyDate>}
            />
            <CardContent>
                <Typography className="description">
                    {post.description}
                </Typography>
                <CardActionArea>
                    <img src={post.image} alt="imagem" />
                </CardActionArea>
            </CardContent>
            <CardAction>
                <div>
                    <ThumbUpAltIcon />
                    <TypographyLike>Curtir</TypographyLike>
                </div>
                <div>
                    <ChatBubbleOutlineIcon />
                    <TypographyComment>Comentar</TypographyComment>
                </div>
            </CardAction>
        </Container>
    );
}

export default PostCard;
