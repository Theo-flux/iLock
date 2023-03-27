import styled from 'styled-components';
import { device } from '../../utils';

export const Section = styled.div`
  width: 100%;
  max-width: 425px;
  margin: 0 auto;
`;

export const AppContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const RowContainer = styled.div`
  width: 100%;
  @media ${device.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`