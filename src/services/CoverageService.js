import axios from 'axios';

const COVERAGE_API_BASE_URL = "https://secure-bastion-91177.herokuapp.com/coverage"

class CoverageService{

    getCoverages(){
        return axios.get(COVERAGE_API_BASE_URL);
    }
}

export default new CoverageService()