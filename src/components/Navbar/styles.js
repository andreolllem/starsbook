import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    padding: 24px;
    margin-top: 64px;
`;

export const Nav = styled.div`
    padding: 16px;
    width: 275px;
    background: var(--primary);
    border-radius: 6px;

    h3 {
        margin: 30px 50px 20px 50px;
        font-weight: 350;
    }

    li {
        margin: 5px 0px 0;
        font-weight: 250;
        list-style: none;
        font-size: 15px;
    }
`;
