import axios from 'axios';

const API_KEY = 'AIzaSyDX_CxL_0uRSfMkA9Kzwn4rNVWJa1B0M6Y'
export async function createUser(email,password) {
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
}

