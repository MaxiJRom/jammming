import React from "react";
import "./SearchResults.css";
import { Tracklist } from "../Tracklist/Tracklist";

export function SearchResults({ searchResults, onAdd }) {
	return (
		<div className="results-container">
			<h2>Resultados de la búsqueda</h2>
			<Tracklist tracksArray={searchResults} onAdd={onAdd} isRemoval={false} />
		</div>
	);
}
