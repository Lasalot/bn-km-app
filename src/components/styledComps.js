import styled from "styled-components";
import uploadImg from "../img/uploadImg.jpg";
import uploadImgBlur from "../img/uploadImg-blur.jpg"

const RoundPicture = styled.img`
display: inline-block;
@media screen and (max-width: 600px){
  width: 2.5rem;
  margin-top: 1rem;
}
`
const loadingBarDiv = styled.div`
      height: 20px;
      width: 50%;
      backgroundColor: #e0e0de;
      borderRadius: 50px;
      margin: auto;
      `

const Input = styled.input`
background-color: rgba(255,255,255, 0.04);
margin-top: 0.1rem !important;
  margin:auto;
  @media screen and (max-width: 600px){
    width: 90%;

  }
  color: #838383;
  display: inline-block;
  width: 88.3%;
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
  width: 100%;

`;

const Label = styled.label`
background-color: rgba(255,255,255, 0.1);
  color: white;
  @media screen and (max-width: 600px){
    width: 93.8%;
    border-radius: 5px 5px 0px 0px;
  }
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 90%;
  border-radius: 5px;
  padding-bottom: 0.5rem;
  padding-left: 0.3rem;
  padding-top: 0.5rem;
  font-weight: 500;
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  text-align: left;
`;

const UploadLabel = styled(Label)`
:hover {
  transition: background-image 0.5s ease-in-out;
  
  background-image: url(${uploadImgBlur});
  font-weight: 400;u
  border: solid;
border-width: 1px;
}
text-align: center;
height: 5rem;
background-image: url(${uploadImg});
background-size: cover;
background-position: center;
font-size: 2rem;

font-family: "Mulish", sans-serif;
  font-weight: 300;
  margin-bottom: 2rem;
`
const OptionButtonR = styled.button`
  display: inline-block;
  position: relative;
  top: -0.95rem;
  font-family: "Mulish", sans-serif;
  font-weight: 200;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.6rem;
  width: 23%;
  height: 4rem;
  background-color: ${(props) => (props.active ? "rgba(255,255,255, 0.5);" : "rgba(255,255,255, 0.12);")};
  color: ${(props) => (props.active ? "white" : "white")};
  @media screen and (max-width: 600px){
    width: 23%;
    margin-left: 2px;
    margin-right: 2px;
    font-size: 1rem;
    margin-top: 0.2rem;
    top: -0.65rem;
  }
  :hover {
    cursor: pointer;
    background-color: ${(props) => (props.active ? "rgba(255,255,255, 0.5);" : "rgba(255,255,255, 0.3);")};
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
const UploadMainButton = styled.button`
display: inline-block;
  font-family: "Mulish", sans-serif;
  font-weight: 200;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.5rem;
  width: 40%;
  height: 4rem;
  background-color: ${(props) => (props.active ? "rgba(255,255,255, 0.5);" : "rgba(255,255,255, 0.12);")};
  color: ${(props) => (props.active ? "white" : "rgba(255,255,255, 0.7);")};
  padding: 10px;
  @media screen and (max-width: 600px){
    width: 60%;
    margin-left: 2px;
    margin-right: 2px;
    font-size: 1rem;
    margin-top: 0.2rem;
  }
  :hover {
    cursor: pointer;background: rgb(232,69,69);
    background: ${(props) => (props.active ? "linear-gradient(90deg, rgba(232,69,69,1) 0%, rgba(242,247,0,1) 100%);" : "linear-gradient(90deg, rgba(232,69,69,1) 0%, rgba(242,247,0,1) 100%);")};
    color: white;
  };
  :focus {
    outline:none
  };
  :active {
    outline:none;
  }
  border: 5px solid;
  border-image-source: linear-gradient(90deg, rgba(232,69,69,1), rgba(242,247,0,1));
  border-image-slice: 1;
  border-radius: 5px;
  font-size: 1.5rem;
`
const OptionButton = styled.button`
  display: inline-block;
  font-family: "Mulish", sans-serif;
  font-weight: 200;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.5rem;
  width: 21.5%;
  height: 4rem;
  background-color: ${(props) => (props.active ? "rgba(255,255,255, 0.5);" : "rgba(255,255,255, 0.12);")};
  color: ${(props) => (props.active ? "white" : "white")};
  padding: 10px;
  @media screen and (max-width: 600px){
    width: 23%;
    margin-left: 2px;
    margin-right: 2px;
    font-size: 1rem;
    margin-top: 0.2rem;
  }
  :hover {
    cursor: pointer;
    background-color: ${(props) => (props.active ? "rgba(255,255,255, 0.5);" : "rgba(255,255,255, 0.3);")};
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
  background: rgb(232,69,69);
    background: linear-gradient(90deg, rgba(232,69,69,1) 0%, rgba(242,247,0,1) 100%);
  width: 91%;
  height: 3rem;
  @media screen and (max-width: 600px){
    width: 95%;
    height: 5rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 2rem;
    padding-right: 0;
    text-align: center;
    font-weight: 400;
  }
  margin-top: 0.5rem;
  border-radius: 5px;
  color: black;
  :hover{cursor: pointer;
    background: #e84545;
    transition: color 0.3s ease-in-out;
    color: white !important;
font-family:}
  border: none;
  font-family: "Mulish", sans-serif;
  font-weight: 200;
  font-size: 1.7rem;
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
const InputContainerAch = styled.div`
width: 50%;
margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: rgba(255,255,255, 0.05);
  border-radius: 10px;
  @media screen and (max-width: 600px){
    width:95%;
  }
  `
const InputContainer = styled.div`
width: 30%;
margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: rgba(255,255,255, 0.05);
  border-radius: 10px;
  @media screen and (max-width: 600px){
    width:95%;
  }

`;

const NavBar = styled.div`
width: 20%;
height: 100%;
line-height: 3rem;
position: absolute;
top: 0;
padding-bottom: 2px;
z-index: 1;
@media screen and (max-width: 600px){
  height: 4rem;
  display: none;
}
`
const mobileNav = styled.div`
position: fixed;
top: 0;
text-align: left
`
 const NavButton = styled.button`
 border: solid;
 border-width 1px;
 border-color: rgba(255,255,255, 0.08);
  color: ${(props) => (props.active ? "#939393" : "#666666")};
  background-color: ${(props) => (props.active ? "rgba(255,255,255, 0.07)" : "rgba(255,255,255, 0.03);")};
 width: 15rem;
 display: block;
 height: 3rem;

 padding-top: 1rem;
 margin-bottom: 0.1rem;
 margin-top: 0;
 border-radius: 0;
 text-align: left;
 font-weight: ${(props) => (props.active ? "400" : "200")};
 :hover{
   cursor:pointer;
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
 const MobileNavButton = styled.button`
 border: solid;
 border-width: 1px;
 border-color: rgba(255,255,255, 0.08);
  color: ${(props) => (props.active ? "#939393" : "#666666")};
  background-color: ${(props) => (props.active ? "rgba(255,255,255, 0.07)" : "rgba(255,255,255, 0.03);")};
 width: 11.5rem;
 display: block;
 height: 2rem;
 padding-bottom: 2rem;
 padding-top: 1rem;
 margin-bottom: 0.1rem;
 margin-top: 0;
 border-radius: 0;
 text-align: left;
 font-weight: ${(props) => (props.active ? "400" : "200")};
 :hover{
   cursor:pointer;
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
 opacity: ${(props) => (props.active ? "1" : "0.1")};
 @media screen and (max-width: 600px){
  width:100%;
 }
 display:inline-block;
 width:100%;
 `

 const Table = styled.table`
 @media screen and (max-width: 600px){
   width: 95%;
 }
 width: 90%;
 background-color: rgba(255,255,255, 0.01);
 `
const TableHead = styled.thead`
background-color: blue;
`



export { Achievement, Input, Label, OptionButton, SendButton, InputContainer, StyledInput, LabelPadding, SignOutButton, RoundPicture, NavBar, NavButton, Table, TableHead, loadingBarDiv, UploadLabel, OptionButtonR, InputContainerAch, UploadMainButton, mobileNav, MobileNavButton };

