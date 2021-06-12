import React from 'react'
import {ToggleContainer,} from "../styles/GlobalStyle";
import { func, string } from 'prop-types';
const Toggle = ({ theme, toggleTheme }) => {
 
return (
<ToggleContainer>
<button  onClick={toggleTheme} variant="primary" size="lg">Light/Dark Mode</button>
</ToggleContainer>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default Toggle;