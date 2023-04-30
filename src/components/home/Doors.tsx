import { StyledH5, StyledSmallText, StyledText, StyledTinyText } from '../../shared'
import {DoorContainer, DoorInnerContainer, DoorCard, Status, StyledLink} from './doors.css'
import { get, ref, child } from 'firebase/database';
import { db } from "../../services";
import { useEffect, useState } from 'react';

function Doors() {
    const [doors, setDoors] = useState();

    function readDoorsData(){
        get(child(ref(db), `doors`)).then((snapshot) => {
            if (snapshot.exists()) {
            // console.log(snapshot.val());
            setDoors(snapshot.val())
            } else {
            // console.log("No data available");
            }
        }).catch((error) => {
            // console.error(error);
        });
        }

    useEffect(() => {
        readDoorsData()
    }, [])

  return (
    <DoorContainer>
        <StyledH5>Doors</StyledH5>

        <DoorInnerContainer>
            <StyledLink to={`/door/main-door`}>
                <DoorCard>
                    <StyledText>Main Door</StyledText>
                    <Status>
                        <StyledTinyText>Status</StyledTinyText>
                        <StyledSmallText 
                            color={`
                                ${doors?.['main-door']?.['isLocked'] ? 'var(--active)' : 'var(--deactivated)'}
                            `}>
                                {doors?.['main-door']?.['isLocked'] ? 'Locked' : 'Unlocked'}
                            </StyledSmallText>
                    </Status>
                </DoorCard>
            </StyledLink>

            {/* <StyledLink to={`/door/office-door`}>
                <DoorCard>
                    <StyledText>Office Door</StyledText>
                    <Status>
                        <StyledTinyText>Status</StyledTinyText>
                        <StyledSmallText 
                            color={`
                                ${doors?.['office-door']?.['isLocked'] ? 'var(--deactivated)' : 'var(--active)'}`
                            }>
                                {doors?.['office-door']?.['isLocked'] ? 'Locked' : 'Unlocked'}
                            </StyledSmallText>
                    </Status>
                </DoorCard>
            </StyledLink> */}
        </DoorInnerContainer>
    </DoorContainer>
  )
}

export default Doors