import React, { useState } from "react";
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
  // Estado para armazenar o valor do input
  const [query, setQuery] = useState("");

  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  // Função chamada ao alterar o valor do input
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Verifica se a consulta não está vazia
    if (!query) return;

    // Navega para a página de pesquisa com a query como parâmetro
    navigate(`/search?q=${query}`);

    // Limpa o valor do input após a submissão
    setQuery("");
  };

  // Renderiza o componente de busca
  return (
    <SearchContainer onSubmit={handleSubmit}>
      <Button type="submit">
        <Icon />
        <Input
          type="text"
          placeholder="Busque pelo título"
          value={query}
          onChange={handleInputChange}
        />
      </Button>
    </SearchContainer>
  );
}

export default Search;
