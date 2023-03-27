import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    :root {
        --old-primary: #A378FF;
        --primary: #000000;
        --green: #00722D;
        --black: #2D2D2D;
        --white: #fff;
        --gray: #666666;
        --gray_stroke: #E5E5E5;
        --red: #ff3333;
        --alabaster: #FAFAFA;
        --silver: #BDBDBD;
        --danger: #FFEAEA;
        --silver: #ADADAD;
        --gallery: #EFEFEF;
        --danger_stroke: #D30000;
        --active: #8000FF;
        --inactive: #2D2D2D;
        --deactivated: #FF0000;
        --active-bg: #8BF290;
        --inactive-bg: #2D2D2D10;
        --deactivated-bg: #FFDADA;
        --alabaster: #FCFCFC;
        --error: #D62828;
    }
    html {
        font-size: 0.9375rem;
        -webkit-tap-highlight-color: transparent;
    }
    
    body {
        margin: 0;
        font-family: 'Ubuntu', sans-serif;
        font-family: 'Nunito', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track{
      background: var(--silver);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--gray);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--primary);
    }
  
    `;