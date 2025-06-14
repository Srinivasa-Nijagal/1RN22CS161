import axios from 'axios';
import {addNumbers} from '../data/number.js';

const test_urls = {
    p:"http://20.244.56.144/evaluation-service/primes",
    f:"http://20.244.56.144/evaluation-service/fibo",
    e:"http://20.244.56.144/evaluation-service/even",
    r:"http://20.244.56.144/evaluation-service/rand"
}
const fetch = async (id) => {
    const url = test_urls[id];
    const cntlr = new AbortController();
    const timeout = setTimeout(() => {
        cntlr.abort();
    }, 500);   
    try {
        const response = await axios.get(url, { signal: cntlr.signal ,timeout: 500, headers:{Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ5ODc3ODY1LCJpYXQiOjE3NDk4Nzc1NjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM5MGRkNTFiLTE4MDctNDQxMS1iMzRlLTAyZTlmMTUzOTdlOSIsInN1YiI6IjFybjIyY3MxNjEuc3Jpbml2YXNhYW5pamFnYWxAcm5zaXQuYWMuaW4ifSwiZW1haWwiOiIxcm4yMmNzMTYxLnNyaW5pdmFzYWFuaWphZ2FsQHJuc2l0LmFjLmluIiwibmFtZSI6InNyaW5pdmFzYS5hLm5pamFnYWwiLCJyb2xsTm8iOiIxcm4yMmNzMTYxIiwiYWNjZXNzQ29kZSI6InBtVnNFaCIsImNsaWVudElEIjoiYzkwZGQ1MWItMTgwNy00NDExLWIzNGUtMDJlOWYxNTM5N2U5IiwiY2xpZW50U2VjcmV0IjoicmZEWlhRWXVFcUpuS25LTiJ9.1bKdp9Jq5j8hBdlJTWW3HjHqEoe6ps8gVFotxUCyCq0'}});
        clearTimeout(timeout);
        if (response?.data?.numbers) {
            addNumbers(response.data.numbers);
        }
    } catch(err) {
        console.error("Error fetching data");
    }
    finally {
        clearTimeout(timeout);
    }
};
export default fetch;


