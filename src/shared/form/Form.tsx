import { Fragment } from 'react';
import { 
    LabelBox,
    SpanLabel,
    SpanFocus,
    StyledInput,
    ErrorText
} from './index';

import { InputProps } from './types'


export const InputText = ({ id, label, name, error, onChange }: InputProps) => {
return (
    <Fragment>
         {error && <ErrorText>{error}</ErrorText>}
        <LabelBox htmlFor={id}>
            <StyledInput name={name} type={'text'} id={id} placeholder="&nbsp;" onChange={onChange}/>
            <SpanLabel>{label}</SpanLabel>
            <SpanFocus></SpanFocus>
        </LabelBox>
       
    </Fragment>
    
);
};

export const InputEmail = ({ id, label, name, error, onChange }: InputProps) => {
    return (
        <Fragment>
             {error && <ErrorText>{error}</ErrorText>}
            <LabelBox htmlFor={id}>
                <StyledInput name={name} type={'email'} id={id} placeholder="&nbsp;" onChange={onChange}/>
                <SpanLabel>{label}</SpanLabel>
                <SpanFocus></SpanFocus>
            </LabelBox>
        </Fragment>
    );
};

export const InputPasssword = ({ id, label, name, error, onChange }: InputProps) => {
    return (
        <Fragment>
             {error && <ErrorText>{error}</ErrorText>}
            <LabelBox htmlFor={id}>
                <StyledInput 
                    name={name} 
                    type={'password'} 
                    id={id} 
                    placeholder="&nbsp;" 
                    onChange={onChange}
                />
                <SpanLabel>{label}</SpanLabel>
                <SpanFocus></SpanFocus>
            </LabelBox>
        </Fragment>
    );
};

