import styled from "@emotion/styled";

export const ReservaContainer = styled.div`
  h1 {
    font-size: 20px;
    margin: 15px;
    text-align: center;
  }
  .logoBlog {
    max-width: 18%;
    min-width: 18%;
    /*object-fit: contain; */
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  /* CSS botão Logout*/
  .btnLogout {
    display: inline;
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    color: red;
    font-weight: bold;
    font-size: 20px;
  }
  .btnText {
    display: inline;
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
    font-weight: 500;
  }
  .textUser {
    margin: 5px;
    text-align: end;
  }

  /* Css Botão Votar */

  .voltar a {
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

  @media (max-width: 400px) {
    width: 50%;
    margin-left: -40px;
    margin-top: 20px;
    font-weight: 500;

    .textUser {
      width: 100%;
      text-align: initial;
    }

    h2 {
      margin-top: 20px;
    }
  }

  @media (min-width: 401px) and (max-width: 500px) {
    width: 50%;
    margin-left: -40px;
    margin-top: 20px;
    font-weight: 500;

    .textUser {
      width: 100%;
      text-align: initial;
    }

    h2 {
      margin-top: 20px;
    }
  }
  @media (min-width: 501px) and (max-width: 500px) {
    width: 50%;
    margin-left: -40px;
    margin-top: 20px;
    font-weight: 500;

    .textUser {
      width: 100%;
      text-align: initial;
    }

    h2 {
      margin-top: 20px;
    }
  }
  @media (min-width: 600px) and (max-width: 768px) {
    width: 50%;
    margin-left: -40px;
    margin-top: 20px;
    font-weight: 500;

    .textUser {
      width: 100%;
      text-align: initial;
    }

    h2 {
      margin-top: 20px;
    }
  }

  @media (min-width: 769px) and (max-width: 1920px) {
    width: 50%;
    margin-left: -30px;
    margin-top: 20px;
    font-weight: 500;

    .textUser {
      width: 100%;
      text-align: initial;
    }

    h2 {
      margin-top: 20px;
    }
  }
`;
