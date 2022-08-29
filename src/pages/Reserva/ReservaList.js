import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ReservaDataService from "./ReservaService";

const ReservaLista = ({ getReservaId }) => {
  const [reserva, setReserva] = useState([]);
  useEffect(() => {
    getReserva();
  }, []);

  const getReserva = async () => {
    const data = await ReservaDataService.getAllReservas();
    console.log(data.docs);
    setReserva(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ReservaDataService.deleteReserva(id);
    getReserva();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="success" onClick={getReserva}>
          Atualizar Lista
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome Cliente</th>
            <th>Telefone</th>
            <th>Destino</th>
            <th>Data Prevista</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="td">
          {reserva.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.cliente}</td>
                <td>{doc.fone}</td>
                <td>{doc.destino}</td>
                <td>{doc.datav}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="primary"
                    className="editar"
                    onClick={(e) => getReservaId(doc.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Deletar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ReservaLista;
