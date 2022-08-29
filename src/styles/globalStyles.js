import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}


body {  

background: ${({ theme }) => theme.bg2};
color: ${({ theme }) => theme.text};
font-family: 'Roboto', sans-serif;
letter-spacing: .6px; 

}
/*LOGIN */
.gridLogin {
background: ${({ theme }) => theme.bgLogin};
}
.btnLogin {
background: ${({ theme }) => theme.bgBottonCard};
&:hover {
background: rgba(255,140,0);
transition: all 250ms linear 0s;
}
}
.reserva a {    
  color: black;
  padding: 7px;
  border: 3px solid red;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: red;
    background-color: white;
   
  }
}

/* a {
color: ${({ theme }) => theme.text};
text-decoration: none;
}
*/
/* CSS CARD DESTINATIONS*/

.card {
  background: ${({ theme }) => theme.bgCard};
}
.post {  
  margin-left: -45px; 
  height: 100%;
  margin-top: 5px;
}
.desc {
color: ${({ theme }) => theme.text}; 
text-decoration: none;
}

/* POST */
.cardButton {
color: ${({ theme }) => theme.titleCard};
background: ${({ theme }) => theme.bgBottonCard};
}
.postTitle {
color: ${({ theme }) => theme.titleCard}; 
text-align: center;
font-size: 26px;
font-weight: bold;
}
.postImg {
width: 100%;
height: 300px;
object-fit: cover;
margin-bottom: 10px;
}
.postDesc {
padding: 0 100px;
font-size: 22px;
font-weight: 300;
text-align: justify;
color: ${({ theme }) => theme.titleCard};
margin-top: 10px;
}
.postLongDesc {
padding: 100px;
padding-top: 50px;
font-size: 18px;
font-style: italic;
text-align: justify;
line-height: 24px;
margin-top: -30px;
}

.textVoltar {
color: red;
font-size: 20px;
font-weight: bold; 
display: flex;
text-decoration: none;

}
/*
.btnVolta { 
display: flex;
font-size: 30px; 
width: 22px;
height: 22px; 
margin-left: 50px;
cursor: pointer;
border-radius: 50%;
background: ${({ theme }) => theme.bgBottonCard};
}  
*/

/* Formulário Reserva */

.header .container {
  justify-content: center;  
  background: ${({ theme }) => theme.bg4};
  color: ${({ theme }) => theme.titleCard};

}

.input-group-text {
  background: ${({ theme }) => theme.bg4};
  color: ${({ theme }) => theme.titleCard};
  font-weight: bold;
}
.editar .delete {
  padding: 0px 4px;
  border-radius: 2px;
}

table {
  text-align: center;
   
}

th {
  color: ${({ theme }) => theme.titleCard};
  
}
tr {
  background: ${({ theme }) => theme.bg};
  
}
.td {
  color: ${({ theme }) => theme.titleCard}; 
  }
  

.App-logo {
  height: 40vmin;
  pointer-events: none;
}


@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 320px) and (max-width: 400px) {

    .post {
      width: 58%;
      height: 600px;
    }
    .postImg {
      width: 100%;   
      height: 20%;          
      margin-top: 10px;
    }
    .postTitle {
      text-align: left;
      margin-left: 20px;          
    }
    .postDesc {    
      font-size: 16px; 
      width: 350px;
      margin-left: -90px;      
    }
    
    
    .textVoltar {
      margin-top: -140px;
      
    }
}
@media (min-width: 401px) and (max-width: 768px) {

    .post {
      width: 68%;
      height: 600px;
    }
    .postImg {
      width: 100%;   
      height: 20%;          
      margin-top: 10px;
    }
    .postTitle {
      text-align: left;
      margin-left: 20px;          
    }
    .postDesc {    
      font-size: 16px;    
      width: 140%;       
      margin-left: -80px;  
        
    }
       
    .textVoltar {
      margin-top: -140px;      
    }
}
@media (min-width: 769px) and (max-width: 1024px) {

    .post {
      width: 68%;
      height: 600px;
    }
    .postImg {
      width: 120%;   
      height: 20%;          
      margin-top: 10px;
    }
    .postTitle {
      text-align: left;
      margin-left: 20px;          
    }
    .postDesc {    
      font-size: 24px;    
      width: 140%;       
      margin-left: -80px;          
    }    
   
    .textVoltar {
      margin-top: -140px;
     
    }
}
@media (min-width: 1025px) and (max-width: 1920px) {

    .post {
      width: 68%;
      height: 600px;
    }
    .postImg {
      align-items: center;
      width: 100%;   
      height: 50%;          
      margin-top: 10px;
    }
    .postTitle {
      text-align: left;
      margin-left: 20px;          
    }
    .postDesc {    
      font-size: 24px;    
      width: 130%;       
      margin-left: -80px;          
    }    
    .textVoltar {
      margin-top: -140px;
     
    }
}

`;
