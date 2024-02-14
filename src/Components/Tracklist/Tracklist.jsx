/* eslint-disable react/prop-types */
import React from "react";
import { Track } from "../Track/Track";
import "./Tracklist.css";

export function Tracklist(props) {
	return (
		<div className="tracklist-container">
			{props.tracksArray.map((track, index) => (
				<Track
					track={track}
					key={index}
					onAdd={props.onAdd}
					onRemove={props.onRemove}
					isRemoval={props.isRemoval}
				/>
			))}
		</div>
	);
}
