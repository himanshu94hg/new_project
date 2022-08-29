import styled from "@emotion/styled";

export const AboutContainer = styled.div`
  .logoAbout {
    max-width: 40%;
    min-width: 40%;
    object-fit: contain;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    font-size: 20px;
    margin: 15px;
    text-align: center;
  }
  p {
    text-align: justify;
    width: 95%;
  }

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
    position: fixed;

    left: 0pt;
    position: absolute;
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
  }
  @media (max-width: 768px) {
    text-align: center;
    width: 60%;
    margin-left: -45px;
    font-weight: 500;

    p {
      margin: auto;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: all ease 0.7s;
    }
    p:hover {
      height: 480px;
      max-width: 200px;
      overflow: auto;
      text-overflow: ellipsis;
      white-space: initial;
    }
  }
`;
