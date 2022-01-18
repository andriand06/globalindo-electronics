import styled, {css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';
const shrinkLabel = css`
top: -14px;
color: ${mainColor};
font-size: 12px;
`;

export const GroupContainer = styled.div`
position: relative;
margin: 45px 0;
`;

export const FormInput = styled.input`
background: none;
background-color: white;
color:${subColor};
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 100%;
border: none;
border-bottom: 1px solid ${subColor};
margin: 25px 0;

&:focus {
    outline: none;
}

&:focus ~ .form-input-label{
    ${shrinkLabel}
}
`;