
import { useParams } from "react-router-dom"
import { Button, StyledText, Wrapper } from "../../shared"
import NavCommon from "../common/NavCommon"
import { DoorContainer, Circle, StyledLockClose, StyledLockOpen } from "./door.css";
import usePersistState from "../../helpers/usepersistState.js";

function Door() {
  const params = useParams();
  const [doorStatus, setDoorStatus] = usePersistState(`${params?.door}-status`, true)

  return (
    <Wrapper>
        <NavCommon text={`${params?.door}`}/>

        <DoorContainer>
          <Circle>
            <StyledLockOpen/>
            <StyledText>Locked</StyledText>
          </Circle>

          <Button onClick={() => setDoorStatus(!doorStatus)} width="fit-content">Unlock {params?.door}</Button>
        </DoorContainer>
    </Wrapper>
  )
}

export default Door