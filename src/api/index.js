import axios from 'axios'

const baseUrl = 'http://api.themoviedb.org/3'
const apiKey = '9047eb3eb15764a57fe06dbc0ab18e6e'

export const fetchData = async (path, params = {}) => {
	params.api_key = apiKey;
	let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
	let url = `${baseUrl}${path}?${queryString}`;	
	try {
		const data = await axios.get(url);
		return data;
	} catch (error) {
		console.log(error)
	}
}