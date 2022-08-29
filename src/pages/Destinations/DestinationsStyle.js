import styled from "@emotion/styled";

export const DestinationsContainer = styled.div`
  /* titulo */

  h1 {
    font-size: 25px;
    margin: 20px;
    text-align: center;
  }
  /* Css Card */
  .home {
    width: 100%;
    display: flex;
    margin-left: -40px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    width: 30%;
    padding: 10px;
    margin-left: -8px;
    margin-right: 50px;
    margin-bottom: 10px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  }

  .img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin: 10px 0px;
  }

  .cardButton {
    border: none;
    border-radius: 10px;
    /*background-color: rgba(53, 16, 102, 0.678); */
    padding: 10px;
    /*color: white; */
    font-weight: bold;
    cursor: pointer;
  }
  .title {
    font-weight: bold;
  }

  .desc {
    width: 100%;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin-bottom: 20px;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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
    margin-top: 0;
    margin-left: -30px;
    text-align: initial;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    margin-top: 20px;
    font-weight: 500;

    .card {
      width: 200px;
      margin-left: -5px;
      margin-bottom: 10px;
    }
    .desc {
      width: 100%;
    }
    h1 {
      text-align: center;
      margin-left: -100px;
    }
  }

  @media (min-width: 769px) and(max-width: 1024px) {
    margin-top: 20px;
    font-weight: 500;

    .card {
      width: 110%;
      margin-left: -5px;
      margin-bottom: 10px;
    }

    h1 {
      text-align: center;
      margin-left: -100px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1920px) {
    .card {
      margin-right: 10px;
    }
  }
`;
