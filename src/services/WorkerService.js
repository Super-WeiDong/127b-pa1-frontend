import axios from 'axios';

const WORKER_API_BASE_URL = "https://secure-bastion-91177.herokuapp.com/worker"
const WORKER_API_TopK_URL = "https://secure-bastion-91177.herokuapp.com/worker/topk"
class WorkerService{

    getWorkers(){
        return axios.get(WORKER_API_BASE_URL);
    }
    createWorker(worker){
        return axios.post(WORKER_API_BASE_URL,worker);
    }
    getTopKWorkers(k){
        return axios.get(WORKER_API_TopK_URL,{
            params: {  
                k: k,
            }
        });
    }
}

export default new WorkerService()