import { useParams } from "react-router-dom"
import { Button, StyledText, Wrapper } from "../../shared"
import NavCommon from "../common/NavCommon"
import { DoorContainer, Circle, StyledLockClose, StyledLockOpen } from "./door.css";

function Door() {
  const params = useParams();

  return (
    <Wrapper>
        <NavCommon text={`${params?.door}`}/>

        <DoorContainer>
          <Circle>
            <StyledLockOpen/>
            <StyledText>Locked</StyledText>
          </Circle>

          <Button width="fit-content">Unlock {params?.door}</Button>
        </DoorContainer>
    </Wrapper>
  )
}

export default Door