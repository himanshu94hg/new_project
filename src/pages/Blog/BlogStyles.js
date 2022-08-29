import styled from "@emotion/styled";

export const BlogContainer = styled.div`
  h1 {
    font-size: 20px;
    margin: 15px;
    text-align: center;
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
  .table-secundary th {
    border: 30px solid blue;
    background-color: rgb(150, 215, 255);
    transition: 1s;
    cursor: pointer;
  }
  .table-secundary th:hover {
    border: 30px solid red;
    background-color: rgb(255, 255, 255);
    font-size: 20px;
    transition: 1s;
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
