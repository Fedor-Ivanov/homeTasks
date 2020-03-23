import axios from 'axios'

export default axios.create({
    baseURL: 'http://5e67f4df1937020016fee3f0.mockapi.io/waiters',
    headers: { 'Content-Type': 'application/json' }
});