import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: rgb(53, 45, 60); /* Dark background, similar to our walls */
    color: rgb(92, 177, 239); /* Text color similar to our lights */
    overflow-x: hidden;
  }

  .start-tour-btn, .stop-tour-btn, .manual-btn {
    background-color: rgb(30, 6, 13); /* Dark red, similar to our wallpaper */
    color: rgb(92, 177, 239); /* Text color similar to our lights */
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 10px;
    transition: background-color 0.3s ease;
    &:hover {
     /* Green color on hover, similar to our bedsheet and Japanese symbol */
    }
  }
`;
