import axios from 'axios';

const BASEURL = "http://localhost:8080/api/company";

class CompanyService {

    //1.Fetch All Company
    getAllCompany() {
       return axios.get(`${BASEURL}/allCompanies`);
    }

    deleteCompanyById(id){
        return axios.delete(`${BASEURL}/delete/${id}`);
    }

}

export default new CompanyService();