import { useState } from "react";
import "./App.css";
import { Playlist } from "./Components/Playlist/Playlist";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { SearchResults } from "./Components/SearchResults/SearchResults";
import { Spotify } from "./helpers/Spotify";

function App() {
	const [playlistName, setPlaylistName] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [playlistTracks, setPlaylistTracks] = useState([]);

	function handleNameChange(e) {
		setPlaylistName(e.target.value);
	}

	function handleAdd({ target }) {
		const targetID = target.dataset.id;

		//verificar si el id del item clickeado coincide con alguno que ya este en la lista:
		if (playlistTracks.some((track) => track.id == targetID)) return;

		const trackToAdd = searchResults.filter((track) => track.id == targetID);
		//sino agrega la cancion al playlistTracks
		setPlaylistTracks((prev) => [...prev, ...trackToAdd]);
	}

	function handleRemove({ target }) {
		const targetID = target.dataset.id;

		setPlaylistTracks((prev) => [
			...playlistTracks.filter((track) => track.id != targetID),
		]);
	}

	function handleOnSearch(term) {
		Spotify.search(term).then((res) => setSearchResults(res));
	}

	function handleSave() {
		const playlistUris = playlistTracks.map((track) => track.uri);

		Spotify.savePlaylist(playlistName, "", playlistUris);

		setPlaylistName("");
		setPlaylistTracks([]);
	}

	return (
		<main>
			<h1>Jammming</h1>
			<SearchBar onSearch={handleOnSearch} />
			<section>
				<SearchResults searchResults={searchResults} onAdd={handleAdd} />
				<Playlist
					playlistName={playlistName}
					onNameChange={handleNameChange}
					playlistTracks={playlistTracks}
					onRemove={handleRemove}
					onSave={handleSave}
				/>
			</section>
		</main>
	);
}

export default App;
