export async function getInfo() {
	const client_id = "db33c7bfce564b37a783a1700b518ab2";
	const client_secret = "0c734e107f58439f8f8a789c7a8eea25";
	const url = "https://accounts.spotify.com/api/token";

	const options = {
		method: "POST",
		headers: {
			"Content-type": "application/x-www-form-urlencoded",
		},
		body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
	};

	const response = await fetch(url, options);
	const jsonResponse = await response.json();

	console.log(jsonResponse);
}
