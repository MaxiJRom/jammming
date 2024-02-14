// import * as React from "react";
import { Tracklist } from "../Tracklist/Tracklist";
import "./Playlist.css";
import PropTypes from "prop-types";

export function Playlist({
	playlistName,
	onNameChange,
	playlistTracks,
	onRemove,
}) {
	return (
		<div className="playlist">
			<input
				type="text"
				className="name-input"
				value={playlistName}
				onChange={onNameChange}
			/>
			<Tracklist
				tracksArray={playlistTracks}
				onRemove={onRemove}
				isRemoval={true}
			/>

			<button className="save-button">Save to Spotify</button>
		</div>
	);
}

Playlist.propTypes = {
	playlistName: PropTypes.string,
	onNameChange: PropTypes.func,
	onRemove: PropTypes.func,
	playlistTracks: PropTypes.array,
};
