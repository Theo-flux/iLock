import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Button, StyledText, Wrapper } from "../../shared"
import NavCommon from "../common/NavCommon"
import { DoorContainer, Circle, StyledLockClose, StyledLockOpen } from "./door.css";
import usePersistState from "../../helpers/usepersistState.js";
import { serverTimestamp } from "firebase/database";
import { set, ref } from 'firebase/database';
import { db } from "../../services";

function Door() {
  const params = useParams();
  const [doorStatus, setDoorStatus] = usePersistState(`${params?.door}-status`, true)

  function writeDoorData(doorStatus: boolean) {
    set(ref(db, `doors/${params.door}`), {
      isLocked: doorStatus,
      created: serverTimestamp()
    });
  }

  useEffect(() => {
    writeDoorData(doorStatus);
  }, [doorStatus]);

  return (
    <Wrapper>
        <NavCommon text={`${params?.door}`}/>

        <DoorContainer>
          <Circle lock={doorStatus}>
            {doorStatus ? <StyledLockClose/> : <StyledLockOpen/>}
            <StyledText>{doorStatus ? 'Locked' : 'Unlocked'}</StyledText>
          </Circle>

          <Button onClick={() => setDoorStatus(!doorStatus)} width="fit-content">{doorStatus ? 'unlock' : 'Lock'} {params?.door}</Button>
        </DoorContainer>
    </Wrapper>
  )
}

export default Door