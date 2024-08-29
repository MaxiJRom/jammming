import React, { useState } from "react";
import "./SearchBar.css";

export function SearchBar({ onSearch, logged }) {
  const [term, setTerm] = useState("");

  function handleChange({ target }) {
    setTerm(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(term);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="input-text"
          type="text"
          name="search_term"
          id="search_term"
          value={term}
          onChange={handleChange}
          placeholder="Artista o canción"
          required
        />
        <input
          className="submit-button"
          type="submit"
          value="Buscar"
          disabled={!logged ? true : false}
        />
      </form>
    </>
  );
}
