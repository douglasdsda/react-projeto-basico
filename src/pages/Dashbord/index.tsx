import React from "react";
import { Title, Form, Repositories } from "./styles";
import logoImg from "../../assets/logo.svg";

const Dashbord: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repository" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories></Repositories>

    </>
  );
};

export default Dashbord;
