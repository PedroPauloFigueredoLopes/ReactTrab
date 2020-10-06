import styled from 'styled-components';

    export const Button = styled.button`
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: Black;
    border: 2px solid Navy;
    margin: 1em 1em;
    padding: 0.50em 1em;
    transition: 0.5s all ease-out;
    &:hover {
    background-color: Blue;
    color: white;
    }`

    export const ButtonSubmit = styled.button`
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: Black;
    border: 2px solid Navy;
    margin: 0.30em 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
    background-color: Blue;
    color: white;
    }`

    export default Button;

