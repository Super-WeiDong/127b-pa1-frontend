import axios from 'axios';

const FOREST_API_BASE_URL = "https://secure-bastion-91177.herokuapp.com/forest"
const FOREST_API_UPDATE_URL = "https://secure-bastion-91177.herokuapp.com/forest/update"
class ForestService{

    getForests(){
        return axios.get(FOREST_API_BASE_URL);
    }

    createForest(forest){
        return axios.post(FOREST_API_BASE_URL,forest);
    }
    
    updateForest(name,mbr_xmin,mbr_xmax,mbr_ymin,mbr_ymax,state){
        return axios.get(FOREST_API_UPDATE_URL,{
            params: {  
                name: name,
                mbr_xmin: mbr_xmin,
                mbr_xmax:mbr_xmax,
                mbr_ymin:mbr_ymin,
                mbr_ymax:mbr_ymax,
                state:state,
            }
        });
    }
}

export default new ForestService()