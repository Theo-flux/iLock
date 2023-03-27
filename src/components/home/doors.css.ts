import styled from "styled-components";
import { radius } from "../../utils";

export const DoorContainer = styled.div`
    margin-top: 2rem;
`

export const DoorInnerContainer = styled.div`
    margin-top: 1rem;
`

export const DoorCard = styled.div`
    border-radius: ${radius.md};
    height: 53px;
    padding: 0rem 1rem;
    background-color: var(--gallery);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

export const Status = styled.div``