import axios from 'axios';

const REPORT_API_BASE_URL = "https://secure-bastion-91177.herokuapp.com/report"

class ReportService{

    getReports(){
        return axios.get(REPORT_API_BASE_URL);
    }
}

export default new ReportService()