import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    header {
        background: var(--primary);
        width: 100%;
        position: fixed;
    }
`;

export const Toobar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;

    h1 {
        font-size: 30px;
        padding: 24px;
        margin-left: 10px;
        color: var(--secondary);
        font-weight: 500;
    }

    .user-section {
        display: flex;
        align-items: center;
    }

    .bell {
        margin-right: 15px;
        width: 30px;
        height: 30px;
    }

    .avatar {
        margin-right: 15px;
        width: 30px;
        height: 30px;
    }

    span {
        padding: 24px;
    }

    button {
        outline: none;
        border: 2px solid var(--secondary);
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        color: var(--secondary);
        font-weight: 600;
        margin-right: 15px;

        &:hover {
            background: var(--secondary);
            color: #fff;
        }
    }
`;
