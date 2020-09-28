import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    margin-top: 64px;
    position: fixed;
`;

export const Nav = styled.div`
    padding: 30px;
    background: var(--primary);
    border-radius: 6px;

    h3 {
        margin: 30px 50px 20px 50px;
        font-weight: 350;
    }

    li {
        margin: px 0px 0;
        font-weight: 250;
        list-style: none;
        font-size: 15px;
    }
`;
