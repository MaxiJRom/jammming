import React from "react";
import { Track } from "../Track/Track";
import "./Tracklist.css";
import PropTypes from "prop-types";

export function Tracklist({ tracksArray, onAdd, onRemove, isRemoval }) {
	return (
		<div className="tracklist-container">
			{tracksArray.map((track, index) => (
				<Track
					track={track}
					key={index}
					onAdd={onAdd}
					onRemove={onRemove}
					isRemoval={isRemoval}
				/>
			))}
		</div>
	);
}

Tracklist.propTypes = {
	tracksArray: PropTypes.array,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	isRemoval: PropTypes.bool,
};
