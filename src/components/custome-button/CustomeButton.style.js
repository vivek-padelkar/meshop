import styled from 'styled-components'

export const CustomeButtonContainer = styled.button`
  margin-top: 10px;
  margin-right: 10px;
  width: auto;
  padding: 0 45px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  background-color: ${(props) =>
    props.isGoogleSignIn === true ? '#00d2ff' : 'black'};

  color: ${(props) => (props.isGoogleSignIn === true ? 'black' : 'white')};
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
