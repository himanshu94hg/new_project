import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import { BiLogOut } from "react-icons/bi";

import * as s from "./BlogStyles";

const BlogPage = () => {
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

  return (
    <s.BlogContainer>
      <div className="textUser">
        {user && user.email}

        <div onClick={handleLogout}>
          <div className="btnLogout"> {<BiLogOut />} </div>
          <div className="btnText"> Logout </div>
        </div>
      </div>

      <h1>Blog Page - Agência de Viagens</h1>
      {/*<img src={logoB} alt="imagem Blog" className="logoBlog" />*/}

      <table>
        <thead>
          <tr className="table-secundary">
            <th scope="col">Código</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
          </tr>
        </thead>
      </table>
    </s.BlogContainer>
  );
};
export default BlogPage;
