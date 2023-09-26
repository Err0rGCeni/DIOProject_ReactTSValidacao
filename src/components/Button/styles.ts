import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    border-radius: 21px;
    background-color: #81259D;
    color: #FFF;
    border: 1px solid #81259D;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &[disabled] {
        background-color: #AA7CB8;
        color: #D4D4D4;
        border: 1px solid #AA7CB8;
    }

    &[disabled]:hover {
        opacity: 0.95;
        cursor: not-allowed;
    }
`