import { useState } from "react";
import "./App.css";
import { Playlist } from "./Components/Playlist/Playlist";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { SearchResults } from "./Components/SearchResults/SearchResults";
import { getInfo } from "./helpers/getInfo";

function App() {
	const [playlistName, setPlaylistName] = useState("New Playlist");
	const [searchResult, setSearchResult] = useState([
		{
			song_name: "Por arriba por abajo",
			artist: "ricky martin",
			album: "vuelve",
			id: 250,
		},
		{
			song_name: "La copa de la vida",
			artist: "ricky martin",
			album: "vuelve",
			id: 320,
		},
		{
			song_name: "vuelve",
			artist: "ricky martin",
			album: "vuelve",
			id: 480,
		},
	]);
	const [playlistTracks, setPlaylistTracks] = useState([
		{
			song_name: "Té para tres",
			artist: "soda stereo",
			album: "cancion animal",
			id: 3020,
		},
	]);

	function handleNameChange(e) {
		setPlaylistName(e.target.value);
	}

	// getInfo();

	function handleAdd({ target }) {
		const targetID = target.dataset.id;

		//verificar si el id del item clickeado coincide con alguno que ya este en la lista:
		if (playlistTracks.some((track) => track.id == targetID)) return;

		const trackToAdd = searchResult.filter((track) => track.id == targetID);
		//sino agrega la cancion al playlistTracks
		setPlaylistTracks((prev) => [...prev, ...trackToAdd]);
	}

	function handleRemove({ target }) {
		const targetID = target.dataset.id;

		setPlaylistTracks((prev) => [
			...playlistTracks.filter((track) => track.id != targetID),
		]);
	}

	return (
		<main>
			<h1>Jammming</h1>
			<SearchBar />
			<section>
				<SearchResults searchResult={searchResult} onAdd={handleAdd} />
				<Playlist
					playlistName={playlistName}
					onNameChange={handleNameChange}
					playlistTracks={playlistTracks}
					onRemove={handleRemove}
				/>
			</section>
		</main>
	);
}

export default App;
