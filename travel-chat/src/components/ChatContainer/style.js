import styled from 'styled-components';

const BannerImage = styled.img`
    width: 100%;
    height: 400px;
    background-position: center;
    margin-top: 64px;
`

const CreateChatForm = styled.form`
    width: 35%;
    margin: 80px auto;
    height: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`

const Header = styled.h1`
    font-size: 1.5em;
    font-family: "freight-sans-pro", sans-serif;
    font-weight: 500;
    font-style: normal;
    margin: 10px 10px 10px 10px;
    padding-bottom: 5px;
    align-self: center;
`

const FormRow = styled.p`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    display: block;
    padding: 0 0 5px 2px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: .8em;
`

const FormInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 5px;
    font-size: 1em;
    font-family: "freight-sans-pro", sans-serif;
    border: 1px solid #dadce0;
    border-radius: 5px;
`

const Submit = styled.input`
    width: 30%;
    height: 40px;
    border-radius: 5px;
    align-self: center;
    cursor: pointer;
    font-size: 1em;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    background: #1eb96e;
    border: 1px solid #f4ab4c;
    color: #ffffff;
    &:hover {
        opacity: .8;
    }
`

export {
    BannerImage,
    CreateChatForm,
    Header,
    FormRow,
    Label,
    FormInput,
    Submit
}