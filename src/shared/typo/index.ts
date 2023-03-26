import styled from 'styled-components';
import { device } from '../../utils';

export const StyledH1 = styled.h1`
  color: var(--black);
  font-weight: 700;
  font-size: 1.875rem;
  @media ${device.base} {
    font-size: 2.2rem;
  }
  @media ${device.lg} {
    font-size: 2.9rem;
    margin-bottom: 0.666rem;
  }
`;

export const StyledH2 = styled.h2``;

export const StyledH3 = styled.h3`
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--black);
  @media ${device.md} {
    font-size: 1.86rem;
  }
`;

export const StyledH4 = styled.h4`
  color: var(--black);
  font-weight: 700;
  font-size: 1.2rem;
`;

export const StyledH5 = styled.h5`
  color: var(--black);
  font-weight: 700;
  font-size: 1rem;
`;

export const StyledH6 = styled.h6``;

export const StyledText = styled.p`
  font-weight: 500;
  color: ${(props) => (props.color ? `${props.color}` : `var(--gray)`)};
`;

export const StyledSmallText = styled.small`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => (props.color ? `${props.color}` : `var(--primary)`)};
  & > span {
    color: var(--primary);
    font-weight: 600;
  }
  @media ${device.lg} {
    font-size: 0.933rem;
  }
`;

export const StyledTinyText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--gray);
  /* border: 1px solid magenta; */
`;