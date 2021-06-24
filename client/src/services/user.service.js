import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', {
            headers: authHeader()
        });
    }

    getBeneficiaryBoard() {
        return axios.get(API_URL + 'beneficiary', {
            headers: authHeader()
        });
    }

    getMemberBoard() {
        return axios.get(API_URL + 'member', {
            headers: authHeader()
        });
    }
}

export default new UserService();