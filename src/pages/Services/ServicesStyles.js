import styled from "@emotion/styled";

export const ServicesContainer = styled.div`
  /*
   button {
    width: 69%;
    height: 30px;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 2px 2px 2px 0px;
  }
  */
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

  @media (max-width: 400px) {
    width: 50%;
    margin-left: -40px;
    margin-top: 20px;
    font-weight: 500;

    .textUser {
      width: 100%;
      text-align: initial;
    }
    .carousel {
      width: 120%;
      height: 50%;
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
    .carousel {
      width: 130%;
      height: 50%;
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
    .carousel {
      width: 145%;
      height: 50%;
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
    .carousel {
      width: 155%;
      height: 50%;
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
    .carousel {
      width: 164%;
      height: 50%;
    }
    h2 {
      margin-top: 20px;
    }
  }
`;
