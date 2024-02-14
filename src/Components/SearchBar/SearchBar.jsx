import React, { useState } from "react";
import "./SearchBar.css";

export function SearchBar() {
	const [term, setTerm] = useState("");

	function handleChange({ target }) {
		setTerm(target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setTerm("");
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
				/>
				<input type="submit" value="Buscar" />
			</form>
		</>
	);
}
