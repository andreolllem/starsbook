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
    min-height: 34px;
    border-bottom: 0.3px solid #3a3b3c;

    h1 {
        font-size: 30px;
        padding: 15px;
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
        border: 1px solid var(--secondary);
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

export const CardActionArea = styled.div`
    margin: 8px 8px;
    padding: 8px 8px;
    background-color: var(--primary);

    cursor: pointer;

    div {
        margin-right: 8px;
        display: flex;
        align-items: center;
    }

    &:hover {
        background: #3a3b3c;
        border-radius: 6px;
    }

    h1 {
        font-size: 20px;
        font-weight: 300;
    }

    hr {
        width: 50%;
        text-align: left;
        margin-left: 0;
    }

    p {
        font-size: 10px;
        color: #777777;
        margin-left: 60px;
        margin-top: -100;
        position: absolute;
    }
`;

export const CardAction = styled.div`
    margin: 8px 8px;
    padding: 8px 8px;
    background-color: var(--primary);
    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
        background: #3a3b3c;
        border-radius: 6px;
    }

    h1 {
        font-size: 15px;
        font-weight: 300;
        margin-left: 10px;
    }

    hr {
        width: 50%;
        text-align: left;
        margin-left: 0;
    }
`;
