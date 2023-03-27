import { StyledH5 } from '../../shared'
import {NavContainer, InnerNav, StyledMdKeyboardBackspace} from './navcommon.css'

interface NavProps {
    text: string;
}

function NavCommon({text}: NavProps) {
  return (
    <NavContainer>
        <StyledMdKeyboardBackspace onClick={() => history.back()}/>

        <InnerNav>
            <StyledH5>{text}</StyledH5>
        </InnerNav>
    </NavContainer>
  )
}

export default NavCommon