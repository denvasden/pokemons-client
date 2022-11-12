import axiosService from "./axios";

class HTTPService {
  constructor(properties) {
    const {client} = properties;

    this._client = client;
  }

  async get(url, params) {
    return await this._client.get(url, params);
  }
}

const httpService = new HTTPService({client: axiosService});

export default httpService;
