import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
        @media (max-width: 1700px) {
            font-size: 75%;
            p{
                font-size: 1.2rem;
            }
        }
  
      
    }
body{
    background: #1b1b1b;
    font-family: 'Inter',sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    font-family: 'Inter',sans-serif;
    padding: 1rem 2rem ;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color:#23d997; 
        color: black;
        border: 3px solid grey;
    }
    
}
h2{
        font-size: 4rem;
        font-weight: lighter;

    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
        //color:#23d997;

    }
    span{
        font-weight: bold;
        color:#23d997;

    }
    a{
        font-size: 1.1rem;
    }
    p{
        padding: 3rem 0rem;
        color: gray;
        line-height: 150%;
    }

`;
export default GlobalStyle;
