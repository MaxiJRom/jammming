const clientId = "db33c7bfce564b37a783a1700b518ab2";
// var clientSecret = "28e3a51d54c645dcba8cd79504091b0d";
// var url = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:5173/";
const redirectUri = "https://jammming-dev.netlify.app/";

let accessToken;

export const Spotify = {
  logIn: function () {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;

    window.location = accessUrl;
  },

  getAccesToken: function () {
    if (this.accessToken) {
      return this.accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      this.accessToken = accessTokenMatch[1];

      console.log(this.accessToken);

      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => (this.accessToken = ""), expiresIn * 1000);

      window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.

      return this.accessToken;
    }
  },

  search: async function (term) {
    const access_token = this.getAccesToken();

    const baseURL = "https://api.spotify.com/v1/search?";

    const paramsString = new URLSearchParams({
      q: term,
      type: "track",
      offset: 0,
      limit: 10,
    });

    const urlToFetch = baseURL + paramsString.toString();

    const options = {
      method: "GET",
      headers: { Authorization: `Bearer ${access_token}` },
    };

    const response = await fetch(urlToFetch, options);
    const jsonResponse = await response.json();

    console.log(jsonResponse);

    const tracksList = jsonResponse.tracks.items.map((track) => ({
      song_name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
      id: track.id,
    }));

    return tracksList;
  },

  savePlaylist: async function (name, description, playlistUris) {
    if (!name || name == "New Playlist" || !playlistUris.length) return;

    const access_token = this.getAccesToken();

    //primero necesito obtener el user id con una peticion GET
    async function getUserId() {
      const url = "https://api.spotify.com/v1/me";
      const options = {
        method: "GET",
        headers: { Authorization: `Bearer ${access_token}` },
      };
      const response = await fetch(url, options);
      const jsonResponse = await response.json();

      return jsonResponse.id;
    }

    //luego, necesito crear la playlist con una peticion POST
    async function createPlaylist(name, description) {
      const userID = await getUserId();
      const url = `https://api.spotify.com/v1/users/${userID}/playlists`;
      const options = {
        method: "POST",
        headers: { Authorization: `Bearer ${access_token}` },
        body: JSON.stringify({
          name: name,
          description: description,
          public: true,
        }),
      };

      const response = await fetch(url, options);
      const jsonResponse = await response.json();
      return jsonResponse.id;
    }

    //por ultimo, cargo los tracks uris a la lista recien creada con una peticion POST
    const playlistId = await createPlaylist(name, description);
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    const options = {
      method: "POST",
      headers: { Authorization: `Bearer ${access_token}` },
      body: JSON.stringify({ uris: playlistUris }),
    };

    const response = await fetch(url, options);
    const jsonResponse = await response.json();

    return jsonResponse;
  },
};
