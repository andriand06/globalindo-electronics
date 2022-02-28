import styled from 'styled-components';

export const ProductSection= styled.div`
    display:flex;
    align-items:center;
    width:90%;
    heightL100%;
    flex-direction:row;
    padding : 20px 80px;
    margin-top:2rem;
    justify-content:space-between;
    @media screen and (max-width:360px){
        flex-direction:column;
    }
    @media screen and (max-width:768px){
        flex-direction:column;
    }
`;

export const Image = styled.div`
    display:flex;
    border:1px solid black;
    width:400px;
    height:400px;
    background-size:cover;
    background-repeat:no-repeat;
    @media screen and (max-width:360px){
        width:200px;
        height:250px;
    }
    @media screen and (max-width:768px){
        width:300px;
        height:350px;
    }
    @media screen and (max-width:1024px){
        width:350px;
        height:350px;
    }
`;

export const ProductDescription = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    height:100%;
    @media screen and (max-width:360px){
        width:100%;
        margin-top:2rem;
    }
    @media screen and (max-width:768px){
        width:100%;
        margin-top:2rem;
    }
`;