import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid ;
border-color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
border-radius: 25px;
padding: 0.2rem 0.5rem;
curdor: pointer;
margin: 0.2rem 0.5 rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    color: ${props => props.cart ? "var(--mainDark)":"var(--mainBlue)"};
} 
&:focus{
    outline:none;
}
`

export const SignUpInButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.0rem;
background: transparent;
border: 0.05rem solid ;
border-color: ${"var(--mainGreen)"};
color: ${"var(--mainGreen)"};
border-radius: 10px;
padding: 0.2rem 0.5rem;
curdor: pointer;
margin: 0.2rem 0.5 rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    border-color: ${"var(--mainDark)"};
    background: ${"var(--midBlue)"};
    color: ${"var(--mainYellow)"};
} 
&:focus{
    outline:none;
}
`