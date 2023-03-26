import styled from "styled-components";
import { radius } from "../../utils";
import { StyledH1, StyledText } from "../../shared";
import {RiSunCloudyFill} from 'react-icons/ri'

export const HomeContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const Banner = styled.div`
    background-color: var(--primary);
    width: 100%;
    height: 126px;
    border-radius: ${radius.md};
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BannerInnerLeft = styled.div`

`

export const BannerStyledTitle = styled(StyledH1)`
    color: white;
    font-weight: 700;
    font-size: 3.4rem;
    margin-bottom: 0rem;
`
export const BannerSmallText = styled(StyledText)`
    margin-top: -10px;
    letter-spacing: 0.06em;
    color: white;
    font-weight: 700;
`

export const StyledRiSunCloudyFill = styled(RiSunCloudyFill)`
    width: 60px;
    height: 60px;
    color: white;
`

