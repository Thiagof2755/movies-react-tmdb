import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Componente de formulário para busca
const SearchContainer = styled.form`
  display: flex;
  align-items: center;
`;

// Botão estilizado para a busca
const Button = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: bold;
  text-align: left;
  margin-left: 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  cursor: pointer;
`;

// Ícone de pesquisa estilizado
const Icon = styled(FaSearch)`
  margin-right: 10px;
`;

// Campo de input estilizado para a busca
const Input = styled.input`
  border: none;
  background-color: transparent;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  width: 200px;
  font: inherit;
  ::placeholder {
    color: #888;
  }
`;

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  // Renderiza o componente de busca
  return (
    <SearchContainer onSubmit={handleSubmit}>
      <Button type="submit" id="13">
        <Icon />
        <Input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Button>
    </SearchContainer>
  );
}

export default Search;
