import styled from "styled-components";


const Input = styled.input`
  background-color: #393e46;
  margin:auto;
  color: #838383;
  display: inline-block;
  width: 25%;
  height: 2rem;
  border-radius: 5px;
  z-index: 1;
  margin-top: -5px;
  margin-bottom: 1rem;
  padding: 9px;
  :focus {
    outline: none;
  }
  ::placeholder{
    color:#838383;
  }
  border:none;
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  text-align: center;
`;

const StyledInput = styled(Input)`
  width: 50%;
  
`;

const Label = styled.label`
  background-color: #222831;
  color: white;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 25%;
  border-radius: 5px;
  padding: 0.6rem;
  font-weight: 500;
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  text-align: left;
`;

const OptionButton = styled.button`
  display: inline-block;
  font-family: "Mulish", sans-serif;
  font-weight: 200;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  width: 8.4%;
  height: 4rem;
  background-color: ${(props) => (props.active ? "#e84545" : "#393e46")};
  color: ${(props) => (props.active ? "white" : "white")};
  padding: 10px;
  :hover {
    cursor: pointer;
    background-color: gray;
    color: white;
  };
  :focus {
    outline:none
  };
  :active {
    outline:none;
  }
  border: none;
  font-size: 1.5rem;
`;

const SendButton = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: #29bc64;
  width: 25%;
  height: 3rem;
  margin-top: 2rem;
  border-radius: 5px;
  color: white;
  :hover{cursor: pointer;
background-color: #179609;}
  border: none;
  font-family: "Mulish", sans-serif;
  font-weight: 200;
  font-size: 1.4rem;
`;

const SignOutButton = styled(SendButton)`
background-color: #222831;
color: white;
font-weight: 600;
font-size: 15px;
:hover {
  cursor: pointer;
  background-color: #e84545;
  color:white;
};
border: none;
font-family: "Mulish", sans-serif;
  font-weight: 600;
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
