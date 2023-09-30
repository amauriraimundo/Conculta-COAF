import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (   
    <div className="search-result">
      {result.nome}, {result.cpf}, {result.datainicio}, {result.datafim}, {mes_ref_coaf}
    </div>
  );
};
