import styled from "styled-components";


const RoundPicture = styled.img`
border-radius: 50%;
margin-bottom 10px;
position: absolute;
top: 4rem;
right: 2rem;
@media screen and (max-width: 600px){
  position: absolute;
  top: 4rem;
  right: 0.3rem;
  width: 20%;
}
`





const Input = styled.input`
  background-color: #393e46;
  margin:auto;
  @media screen and (max-width: 600px){
    width: 90%;

  }
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
    color:#9d9d9d;
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
  @media screen and (max-width: 600px){
    width: 89.5%;
    border-radius: 5px 5px 0px 0px;
  }
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
  @media screen and (max-width: 600px){
    width: 31%;
    margin-left: 2px;
    margin-right: 2px;
    font-size: 1rem;
    margin-top: 0.2rem;
  }
  :hover {
    cursor: pointer;
    background-color: ${(props) => (props.active ? "#e84545" : "gray")};
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
  @media screen and (max-width: 600px){
    width: 95%;
    height: 5rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
    padding-right: 0;
    text-align: center;
  }
  margin-top: 2rem;
  border-radius: 5px;
  color: white;
  :hover{cursor: pointer;
background-color: #179609;
font-family:}
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

`

const InputContainer = styled.div`

  width: 100%
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

`;

const NavBar = styled.div`
width: 100%;
height: 3rem;
line-height: 3rem;
position: fixed;
top: 0;
background-color: #141324;
padding-bottom: 2px;
z-index: 1;
`;
 const NavButton = styled.button`
 background-color: ${(props) => (props.active ? "#e84545" : "#393e46")};
  color: ${(props) => (props.active ? "white" : "white")};
 width: 15%;
 @media screen and (max-width: 600px){
   width: 30%;
   margin-left: 2px;
   margin-right: 2px;
   font-size: 1rem;
   position: sticky;
   top: 0;
 }
 margin-left: 0.5rem;
 margin-right: 0.5rem;
 display: inline-block;
 border: none;
 color: white;
 height: 3rem;
 margin-top: 0;
 border-radius: 5;
 font-weight: ${(props) => (props.active ? "600" : "200")};
 :hover{
   cursor:pointer;
  background-color: ${(props) => (props.active ? "#e84545" : "gray")};
   font-family: "Mulish", sans-serif;
  font-weight: 600;
 }
 :active {
  outline:none;
  border:none;

}
:focus {
  outline:none
};
 font-family: "Mulish", sans-serif;
  font-size: 1rem;
 `;

 const Achievement = styled.img`
 opacity: ${(props) => (props.active ? "1" : "0.1")}
 `

export { Achievement, Input, Label, OptionButton, SendButton, InputContainer, StyledInput, LabelPadding, SignOutButton, RoundPicture, NavBar, NavButton };

