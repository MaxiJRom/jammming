import React, { useState } from "react";
import "./SearchBar.css";

export function SearchBar({ onSearch }) {
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
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="search_term"
					id="search_term"
					value={term}
					onChange={handleChange}
					placeholder="Artista o canción"
					required
				/>
				<input type="submit" value="Buscar" />
			</form>
		</>
	);
}
