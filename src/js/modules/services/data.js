export const getData = async (URL) => {
	const res = await fetch(URL)

	if (!res.ok) {
		throw Error(`Error log: ${res}, status: ${res.status}`);
	}

	return await res.json()
}