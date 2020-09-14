import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%100%;
`;

export const Header = styled.div`
    background: var(--primary);
    width: 100%;
    position: fixed;
`;

export const Toobar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;

    span {
        padding: 15px;
    }
`;

export const Main = styled.div`
    height: 100vh;
    display: flex;
    width: 1200px;
    margin: 0 auto;
`;

export const Navbar = styled.div`
    width: 350px;
    background: var(--primary);
    padding: 24px;
`;

export const Feed = styled.div`
    width: 100%;
    background: var(--primary);
    padding: 24px;
`;
