import router from "@/router";
import axios from "axios";

const api = axios.create({
	baseURL: '/api',
	headers: {
		'Accept': 'application/json',
		'X-Requested-With': 'XMLHttpRequest'
	},
	withCredentials: true,
	withXSRFToken: true,
	timeout: 5000
})

const getCsrfCookie = () => api.get('token');

api.interceptors.response.use(
	// Return the response if the request was successful
	(response) => response,
	
	async (error) => {
		// Safely check the status code using Optional Chaining
		const status = error.response?.status

		// Redirect to login page if the session has expired
		if( status === 401 || status === 419){
			router.push({name:'login', query: {redirect: router.currentRoute.value.fullPath}})
		}

		// Always reject the promise so the Error can be caught in Vue component
		return Promise.reject(error)
	}
)


export {getCsrfCookie}

export default api