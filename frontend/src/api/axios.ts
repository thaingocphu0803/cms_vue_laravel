import axios from "axios";

const api = axios.create({
	baseURL: '/api',
	headers: {
		'Accept': 'application/json'
	},
	withCredentials: true,
	withXSRFToken: true,
	timeout: 5000
})

export default api