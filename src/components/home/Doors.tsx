import { Link } from 'react-router-dom'
import { StyledH5, StyledSmallText, StyledText, StyledTinyText } from '../../shared'
import {DoorContainer, DoorInnerContainer, DoorCard, Status, StyledLink} from './doors.css'

function Doors() {
  return (
    <DoorContainer>
        <StyledH5>Doors</StyledH5>

        <DoorInnerContainer>
            <StyledLink to={`/door/main-door`}>
                <DoorCard>
                    <StyledText>Main Door</StyledText>
                    <Status>
                        <StyledTinyText>Status</StyledTinyText>
                        <StyledSmallText color={'var(--deactivated)'}>Unlocked</StyledSmallText>
                    </Status>
                </DoorCard>
            </StyledLink>

            <StyledLink to={`/door/office-door`}>
                <DoorCard>
                    <StyledText>Office Door</StyledText>
                    <Status>
                        <StyledTinyText>Status</StyledTinyText>
                        <StyledSmallText color={'var(--active)'}>Locked</StyledSmallText>
                    </Status>
                </DoorCard>
            </StyledLink>
        </DoorInnerContainer>
    </DoorContainer>
  )
}

export default Doors