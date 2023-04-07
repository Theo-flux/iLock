import styled from 'styled-components'
import { radius, transition } from '../../utils';

type ButtonProps = {
  disabled?: boolean,
  width?: string
}

// Button styling
export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: ${props => props.width ? `${props.width}`: '100%'};
  font-weight: 500;
  border-radius: ${radius.sm};
  background-color: var(--primary);
  color: var(--white);
  padding: 1rem 1rem;
  border: none;
  outline: none;
`;

export const OutlinedButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => (props.disabled ? 'var(--silver)' : `var(--black)`)};
  border: ${(props) =>
    props.disabled ? '1px solid var(--silver)' : `1px solid var(--black)`};
  pointer-events: ${(props) => (props.disabled ? 'none' : null)};
`;
// End of button styling


//Start Custom Styling for input
export const LabelBox = styled.label`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SpanLabel = styled.span`
  position: absolute;
  top: 0px;
  left: 12px;
  font-size: 0.875rem;
  color: var(--gray);
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
  width: fit-content;
  /* border: 1px solid magenta; */
`;

export const SpanFocus = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
`;

export const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 1rem 0.5rem 1rem 0.5rem;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  background-color: var(--gallery);
  /* box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3); */
  color: #000;
  transition: all 0.15s ease;

  &:hover {
    /* background: rgba(0, 0, 0, 0.04); */
    /* box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5); */
  }

  &:not(:-moz-placeholder-shown) + ${SpanLabel} {
    color: var(--gray);
    transform: translate3d(0, -30px, 0) scale(0.75);
  }

  &:not(:-ms-input-placeholder) + ${SpanLabel} {
    color: var(--gray);
    transform: translate3d(0, -30px, 0) scale(0.75);
  }

  &:not(:placeholder-shown) + ${SpanLabel} {
    color: var(--gray);
    transform: translate3d(0, -30px, 0) scale(0.75);
  }

  &:focus {
    /* background: rgba(0, 0, 0, 0.05); */
    outline: none;
    /* box-shadow: inset 0 -2px 0 var(--primary); */
  }

  &:focus + ${SpanLabel} {
    color: var(--primary);
    transform: translate3d(0, -30px, 0) scale(0.75);
    left: 0px;
  }

  &:focus + ${SpanLabel} + ${SpanFocus} {
    transform: scaleX(1);
    transition: all 0.1s ease;
    left: 0px;
  }

  margin-bottom: 1.5rem;
  border-radius: ${radius.sm};
`;

// End  Custom Styling for input

export const ErrorText = styled.small`
  margin-bottom: 0.5rem;
  color: red;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`