import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  if (!results || results.length === 0) {
    // Se a lista de resultados estiver vazia ou nula, não renderizamos nada
    return null;
  }

  return (
    <div className="results-list">
      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>CPF</th>
            <th>DATA INI</th>
            <th className="ultimo">DATA FIM</th>
            <th>MES_REF_COAF</th>

          </tr>
        </thead>
        <tbody>
          {results.map((result, id) => (
            <tr key={id}>
              <td>{result.nome}</td>
              <td>{result.cpf}</td>
              <td>{result.datainicio}</td>
              <td className="ultimo">{result.datafim}</td>
              <td>{result.mes_ref_coaf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
