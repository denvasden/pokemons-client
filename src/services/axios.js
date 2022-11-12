import axios from "axios";

class AxiosService {
  constructor(properties) {
    const {axios} = properties;

    this._axios = axios;
  }

  async get(url, params) {
    return await this._axios.get(url, {params});
  }
}

const axiosInstance = axios.create();
const axiosService = new AxiosService({axios: axiosInstance});

export default axiosService;
