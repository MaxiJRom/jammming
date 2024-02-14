import React from "react";
import "./SearchResults.css";
import { Tracklist } from "../Tracklist/Tracklist";

export function SearchResults(props) {
	return (
		<div className="results-container">
			<h2>Search results</h2>
			<Tracklist
				tracksArray={props.searchResult}
				onAdd={props.onAdd}
				isRemoval={false}
			/>
		</div>
	);
}
