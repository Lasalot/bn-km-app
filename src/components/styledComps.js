import styled from "styled-components";

const Input = styled.input`
  background-color: white;
  margin:auto;
  display: inline-block;
  width: 50%;
  border-radius: 5px;
  z-index: 1;
  margin-top: -5px;
  padding: 9px;
  :focus {
    outline: none;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const Label = styled.label`
  background-color: darkslategrey;
  color: white;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 50%;
  border-radius: 5px;
  padding: 10px;
  font-weight: 500;
`;

const OptionButton = styled.button`
  display: inline-block;
  border-radius: 5px;
  width: 17%;
  margin: auto;
  background-color: ${(props) => (props.active ? "red" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 10px;
  :hover {
    cursor: pointer;
    background-color: red;
  };
  :focus {
    outline:none
  };
  :active {
    outline:none;
  }
`;

const SendButton = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: red;
  width: 25%;
  padding: 10px;
  margin-top: 40px;
  border-radius: 5px;
  color: white;
  :hover{cursor: pointer;}
`;

const SignOutButton = styled(SendButton)`
background-color: lightgrey;
color: black;
font-weight: 600;
font-size: 15px
`

const LabelPadding = styled(Label)`
margin-top: 20px;
`

const InputContainer = styled.div`

  width: 100%
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export { Input, Label, OptionButton, SendButton, InputContainer, StyledInput, LabelPadding, SignOutButton };
