import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import { BiLogOut } from "react-icons/bi";
import AddReserva from "./AddReserva";
import ReservaList from "./ReservaList";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import "./ReservaStyle";
//import logoB from "../../assets/logoB.png";

import * as s from "./ReservaStyle";

const ReservaPage = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/about");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [reservaId, setReservaId] = useState("");

  const getReservaIdHandler = (id) => {
    console.log("O ID do documento a ser editado: ", id);
    setReservaId(id);
  };
  return (
    <s.ReservaContainer>
      <div className="textUser">
        {user && user.email}

        <div onClick={handleLogout}>
          <div className="btnLogout"> {<BiLogOut />} </div>
          <div className="btnText"> Logout </div>
        </div>
      </div>

      {/*<img src={logoB} alt="imagem Blog" className="logoBlog" />*/}
      <Navbar className="header">
        <Container>
          <Navbar.Brand className="titulo">Faça sua Reserva</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddReserva id={reservaId} setReservaId={setReservaId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ReservaList getReservaId={getReservaIdHandler} />
          </Col>
        </Row>
      </Container>
      <div className="voltar">
        <Link to="/services"> Voltar </Link>
      </div>
    </s.ReservaContainer>
  );
};
export default ReservaPage;
