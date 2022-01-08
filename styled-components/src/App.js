import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {StyledButton2} from "./compoments/styles/StyledButton2.styled";
import {StyledButton3} from "./compoments/styles/StyledButton3.styled";
import GlobalStyles from './GlobalStyles';

const StyledButton = styled.button`
  background-color:red;
  font-size: 32px;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <StyledButton> Button 1 inline</StyledButton>
      <StyledButton2>Button 2 external</StyledButton2>
      <StyledButton3 bg={"green"}>Button 2 external</StyledButton3>
    </div>
  );
}

export default App;
