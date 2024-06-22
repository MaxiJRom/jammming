// import * as React from "react";
import { Tracklist } from "../Tracklist/Tracklist";
import "./Playlist.css";
import PropTypes from "prop-types";

export function Playlist({
	playlistName,
	playlistTracks,
	onNameChange,
	onRemove,
	onSave,
}) {
	return (
		<div className="playlist">
			<input
				type="text"
				className="name-input"
				value={playlistName}
				onChange={onNameChange}
				required
				placeholder="Nombre de la playlist"
			/>
			<Tracklist
				tracksArray={playlistTracks}
				onRemove={onRemove}
				isRemoval={true}
			/>

			<button className="save-button" onClick={onSave}>
				Save to Spotify
			</button>
		</div>
	);
}

Playlist.propTypes = {
	playlistName: PropTypes.string,
	onNameChange: PropTypes.func,
	onRemove: PropTypes.func,
	onSave: PropTypes.func,
	playlistTracks: PropTypes.array,
};
