import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ReservaDataService from "./ReservaService";

const AddReserva = ({ id, setReservaId }) => {
  const [cliente, setCliente] = useState("");
  const [datav, setDatav] = useState("");
  const [destino, setDestino] = useState("");
  const [fone, setFone] = useState("");
  const [status, setStatus] = useState("Reservado");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (cliente === "" || datav === "") {
      setMessage({ error: true, msg: "Todos os campos são obrigatórios!" });
      return;
    } else if (destino === "" || fone === "") {
      setMessage({ error: true, msg: "Todos os campos são obrigatórios!" });
      return;
    }
    const newReserva = {
      cliente,
      fone,
      destino,
      datav,
      status
    };
    console.log(newReserva);

    try {
      if (id !== undefined && id !== "") {
        await ReservaDataService.updateReserva(id, newReserva);
        setReservaId("");
        setMessage({ error: false, msg: "Atualizado com sucesso!" });
      } else {
        await ReservaDataService.addReserva(newReserva);
        setMessage({
          error: false,
          msg: "Nova reserva adicionada com sucesso!"
        });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setCliente("");
    setFone("");
    setDestino("");
    setDatav("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ReservaDataService.getReserva(id);
      console.log("o registro é:", docSnap.data());
      setCliente(docSnap.data().cliente);
      setDatav(docSnap.data().fone);
      setDestino(docSnap.data().destino);
      setFone(docSnap.data().datav);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("O id aqui é: ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formReservaCliente">
            <InputGroup>
              <InputGroup.Text id="formReservaCliente">Nome</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="nome cliente"
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formReservaFone">
            <InputGroup>
              <InputGroup.Text id="formReservaFone">Telefone</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="número para contato"
                value={fone}
                onChange={(e) => setFone(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formReservaDestino">
            <InputGroup>
              <InputGroup.Text id="formReservaDestino">Destino</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="destino desejado"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formReservaData">
            <InputGroup>
              <InputGroup.Text id="formReservaData">
                Data viagem
              </InputGroup.Text>
              <Form.Control
                type="date"
                placeholder="data desejada"
                value={datav}
                onChange={(e) => setDatav(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Reservado");
                setFlag(true);
              }}
            >
              Reservado
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Pendente");
                setFlag(false);
              }}
            >
              Pendente
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Adicionar / Alterar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddReserva;
