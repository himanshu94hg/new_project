import { db } from "../../firebaseDb";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const reservaCollectionRef = collection(db, "reserva");
class ReservaDataService {
  addReserva = (newReserva) => {
    return addDoc(reservaCollectionRef, newReserva);
  };

  updateReserva = (id, updateReserva) => {
    const reservaDoc = doc(db, "reserva", id);
    return updateDoc(reservaDoc, updateReserva);
  };

  deleteReserva = (id) => {
    const reservaDoc = doc(db, "reserva", id);
    return deleteDoc(reservaDoc);
  };

  getAllReservas = () => {
    return getDocs(reservaCollectionRef);
  };

  getReserva = (id) => {
    const reservaDoc = doc(db, "reserva", id);
    return getDoc(reservaDoc);
  };
}

export default new ReservaDataService();
