export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

<p key={id}>NOME:{result.nome}</p>
<p key={id}>CPF:{result.cpf}</p>
<p key={id}>DATA INI:{result.datainicio}</p>
<p key={id}>DATA FIM:{result.datafim}</p>



import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import "./ButtonSearch.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const url = "http://localhost:8800/";
  const [searchTime, setSearchTime] = useState(""); // Estado para armazenar a data e hora da pesquisa

  const fetchData = () => {
    const currentTime = new Date(); // Obtém a data e hora da pesquisa
    const options = { timeZone: "America/Sao_Paulo" }; // Define o fuso horário para Brasília

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            input &&
            user &&
            user.nome &&
            user.nome.toUpperCase().includes(input.toUpperCase())
          );
        });

        const searchResult = {
          dataHora: currentTime.toLocaleString("pt-BR", options), // Formata a data e hora com o fuso horário de Brasília
          resultados: results, // Resultados da pesquisa
        };

        setResults([searchResult]);
        setSearchTime(searchResult.dataHora); // Atualiza a data e hora da pesquisa no estado
      });
  };

  const handleSearchClick = () => {
    fetchData();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const handleInputChange = (value) => {
    setInput(value);
    if (value === "") {
      // Se o campo de entrada for esvaziado, definimos os resultados como vazios e a data/hora como vazia
      setResults([]);
      setSearchTime("");
    }
  };

  return (
    <>
      <div className="title">
        <h1>Consulta COAF</h1>
      </div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Digite para pesquisar..."
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn" onClick={handleSearchClick}>
          Buscar
        </button>
      </div>
      <div className="footer">
        {/* Exibe a data e hora da pesquisa no rodapé */}
        {searchTime && <p>Data e Hora da Pesquisa: {searchTime}</p>}
      </div>
    </>
  );
};
