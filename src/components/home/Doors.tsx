import { StyledH5, StyledSmallText, StyledText, StyledTinyText } from '../../shared'
import {DoorContainer, DoorInnerContainer, DoorCard, Status} from './doors.css'

function Doors() {
  return (
    <DoorContainer>
        <StyledH5>Doors</StyledH5>

        <DoorInnerContainer>
            <DoorCard>
                <StyledText>Main Door</StyledText>
                <Status>
                    <StyledTinyText>Status</StyledTinyText>
                    <StyledSmallText color={'var(--deactivated)'}>Unlocked</StyledSmallText>
                </Status>
            </DoorCard>

            <DoorCard>
                <StyledText>Office Door</StyledText>
                <Status>
                    <StyledTinyText>Status</StyledTinyText>
                    <StyledSmallText color={'var(--active)'}>Locked</StyledSmallText>
                </Status>
            </DoorCard>
        </DoorInnerContainer>
    </DoorContainer>
  )
}

export default Doors