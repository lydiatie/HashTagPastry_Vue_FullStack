import http from '../http-common';

class TokenData {
    getAll() {
        return http.get("/tokens");
    }


    create(data) {
        return http.post("/tokens", data);
    }


    delete(_id) {
        return http.delete(`/tokens/${_id}`);
    }

}

export default new TokenData();