import styled from "styled-components";
import { StyledH5, StyledTinyText } from "../../shared";

export const NotificationSection = styled.section`
    margin-top: 2rem;
`

export const NotificationPod = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:not(:last-of-type) {
        margin-bottom: 2rem;
    }
`

export const Figure = styled.figure``;

export const Image = styled.img``;

export const Column = styled.div``;

export const ColumnTitle = styled(StyledH5)``;

export const ColumnText = styled(StyledTinyText)``