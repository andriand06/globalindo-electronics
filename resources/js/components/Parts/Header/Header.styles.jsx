import styled , { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionsContainerStyles = css`
margin-right: 2rem;
color: #2d2d2d;
@media screen and (max-width: 768px){
    margin-right: 0.5rem;
    font-size: smaller;

}
&:hover {
    color: $blue;
    text-decoration: none;
    font-size: larger;
    transition: 0.3s ease-in-out;
}
`;
export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
font-weight: 500;
padding: 2rem 2.5rem 1.5rem 2rem;
border-bottom: 1px solid #e5e5e5;
@media screen and(max-width:768px){
    padding: 1rem 1rem;
    align-items: center;
}
@media screen and(max-width:360px){
    padding: 1rem 1rem;
    align-items: center;
}
`;

export const LogoContainer = styled.div`
display: flex;
`;

export const LogoText = styled.a`
font-size: x-large;
color: #3252DF;
font-weight: 500;
@media screen and (max-width:768px){
    font-size: large;
    margin-right: 1rem;
}
@media screen and  (max-width:360px){
    font-size: small;
}
&:hover{
    text-decoration: none;
}
`;

export const OptionsContainer = styled.div`

justify-content: space-between;
@media screen and (min-width:360px) {
    display: flex;
}
@media screen and (max-width:360px) {
    display: none;
}
`;
export const OptionsLink = styled(Link)`
${OptionsContainerStyles}
`;
export const OptionsA = styled.a`
margin-right: 2rem;
color: #2d2d2d;
@media screen and (max-width: 768px){
    margin-right: 1rem;
    font-size: smaller;

}
&:hover {
    color: $blue;
    text-decoration: none;
    font-size: larger;
    transition: 0.3s ease-in-out;
}
`;
export const RightSide = styled.div`
float: right;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const ProfileDetail = styled.div`
display: none;
position: absolute;
background-color: #f1f1f1;
min-width: 160px;
overflow: auto;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
right: 40px;
top: 68px;
z-index: 1;
text-align: center;
padding: 0.5rem 0.5rem;
`;

export const DropdownIcon = styled.a`
width: 32px;
height: 30px;
text-decoration: none;
@media screen and (max-width:360px){
    display: block;
}
@media screen and (min-width:768px)
{
    display: none;
}

`;

export const DropdownMenu = styled.div`
width: 50%;
height: 18%;
background-color: white;
display: none;
transition: 0.3s ease-in-out;
z-index: 99;
position: absolute;
top: 77px;
left: 200px;
align-items:center;
justify-content:center;
flex-direction:column;
box-shadow: 0 8px 8px 0 rgba(#2d2d2d, 0.8);
`;