import styled from "styled-components";
import {HiLockClosed, HiLockOpen} from 'react-icons/hi'

type Props = {
    lock: boolean
}

export const DoorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

export const Circle = styled.div<Props>`
    width: 200px;
    height: 200px;
    border: ${props => props.lock ? '9px solid var(--active)' : '9px solid var(--deactivated)'};
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

export const StyledLockClose = styled(HiLockClosed)`
    width: 60px;
    height: 60px;
`

export const StyledLockOpen = styled(HiLockOpen)`
    width: 60px;
    height: 60px;
`