import React from "react";
import PostCard from "../PostCard";

import { Container } from "./style";

const posts = [
    {
        id: 1,
        autor: {
            id: 1,
            name: "Carolina Minni",
            avatar: "/img/avatars/caro.jpg",
        },

        title: "Rede social para estrelas",
        date: "Set 26, 2020",
        description: "Beleza de hoje com a princess 💗 @brunapederiva",
        image: "img/posts/post_03.jpg",
    },

    {
        id: 1,
        autor: {
            id: 1,
            name: "Carolina Minni",
            avatar: "/img/avatars/caro.jpg",
        },

        title: "Rede social para estrelas",
        date: "Set 26, 2020",
        description:
            "Minha make para esse ensaio pessoal incrível com ela a maravilhosa @katiushafuchs 🔥🔥🔥",
        image: "img/posts/post_02.jpg",
    },
];

function Feed() {
    return (
        <Container>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </Container>
    );
}

export default Feed;
