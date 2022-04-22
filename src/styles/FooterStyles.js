import styled from "styled-components"; 

export const Box = styled.div`
    padding:70px 10px;
    background:white;
    position: bottom;
    bottom: 0;
    width: 100%;

    @media (max-width:1000 px) {
        padding:70px 60px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justifty-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column; 
    text-align: left; 
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-gap: 10px;

    grid-template-columns:  repeat(auto-fill,minmax(200px,1fr));
`;

export const FooterLink = styled.a`
    color: black;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: red;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: black;
    margin-bottom: 40px;
    font-weight: bold;
`;

