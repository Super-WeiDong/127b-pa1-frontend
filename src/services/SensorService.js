import axios from 'axios';

const SENSOR_API_BASE_URL = "https://secure-bastion-91177.herokuapp.com/sensor"
const SENSOR_API_SWITCH_URL = "https://secure-bastion-91177.herokuapp.com/sensor/switch"
const SENSOR_API_UPDATE_URL = "https://secure-bastion-91177.herokuapp.com/sensor/update"
const SENSOR_API_RANKING_URL = "https://secure-bastion-91177.herokuapp.com/sensor/ranking"

class SensorService{

    getSensors(){
        return axios.get(SENSOR_API_BASE_URL);
    }
    createSensor(sensor){
        return axios.post(SENSOR_API_BASE_URL,sensor);
    }
    Switch(a,b){
        return axios.get(SENSOR_API_SWITCH_URL,{
            params: {  
                a: a,
                b: b
            }
        });
    }
    
    updateSensor(sensorUp){
        return axios.post(SENSOR_API_UPDATE_URL,sensorUp);
    }

    sensorRanking(){
        return axios.get(SENSOR_API_RANKING_URL);
    }
}

export default new SensorService()