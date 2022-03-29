import axios from 'axios';

const STATE_API_BASE_URL = "https://secure-bastion-91177.herokuapp.com/state"

class StateService{

    getState(){
        return axios.get(STATE_API_BASE_URL);
    }
    createState(state){
        return axios.post(STATE_API_BASE_URL,state);
    }
}

export default new StateService()