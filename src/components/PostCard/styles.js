import styled from "styled-components";

export const Container = styled.div`
    background: var(--primary);
    margin-bottom: 10px;
    border-radius: 6px;
`;

export const Typography = styled.div`
    font-size: 20px;
`;

export const TypographyDate = styled.div`
    color: #777777;
    font-size: 10px;
`;

export const CardContent = styled.div`
    .description {
        padding: 10px;
        font-weight: 100;
        max-width: 550px;
    }
`;

export const CardActionArea = styled.div`
    max-height: 600px;
    width: 100%;
    max-width: 100%;
`;

export const CardAction = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 5px;
    }

    svg {
        margin-right: 5px;
        cursor: pointer;

        &:hover {
            fill: var(--secondary);
        }
    }
`;

export const TypographyLike = styled.div`
    color: #777777;
    font-size: 15px;

    &:hover {
        color: var(--secondary);
    }
`;

export const TypographyComment = styled.div`
    color: #777777;
    font-size: 15px;

    &:hover {
        color: var(--secondary);
    }
`;
