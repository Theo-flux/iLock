import { 
    LabelBox,
    SpanLabel,
    SpanFocus,
    StyledInput,
} from './index';

import { InputProps } from './types'


export const InputText = ({ id, label }: InputProps) => {
return (
    <LabelBox htmlFor={id}>
    <StyledInput type={'text'} id={id} placeholder="&nbsp;" />
    <SpanLabel>{label}</SpanLabel>
    <SpanFocus></SpanFocus>
    </LabelBox>
);
};

export const InputEmail = ({ id, label }: InputProps) => {
    return (
        <LabelBox htmlFor={id}>
        <StyledInput type={'email'} id={id} placeholder="&nbsp;" />
        <SpanLabel>{label}</SpanLabel>
        <SpanFocus></SpanFocus>
        </LabelBox>
    );
};

export const InputPasssword = ({ id, label }: InputProps) => {
    return (
        <LabelBox htmlFor={id}>
        <StyledInput type={'password'} id={id} placeholder="&nbsp;" />
        <SpanLabel>{label}</SpanLabel>
        <SpanFocus></SpanFocus>
        </LabelBox>
    );
};

