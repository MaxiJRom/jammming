/* eslint-disable react/prop-types */
import React from "react";
import "./Track.css";

export function Track({ track, onRemove, onAdd, isRemoval }) {
	return (
		<div className="track">
			<div className="track-info">
				<h5 className="song">{track.song_name}</h5>
				<p className="artist">{track.artist}</p>
				<p className="album">{track.album}</p>
			</div>
			{isRemoval ? (
				<button className="track-button" onClick={onRemove} data-id={track.id}>
					-
				</button>
			) : (
				<button className="track-button" onClick={onAdd} data-id={track.id}>
					+
				</button>
			)}
		</div>
	);
}
