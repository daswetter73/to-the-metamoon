import axios, { AxiosInstance } from 'axios';
import { autobind } from 'core-decorators';

class CoinGescoApi {
  private request: AxiosInstance;

  private url = 'https://api.coingecko.com/api/v3';

  private axiosConfig = {
    baseURL: this.url,
    validateStatus: (status: number) => status <= 526,
    withCredentials: false,
  };

  constructor() {
    this.request = axios.create(this.axiosConfig);
  }

  @autobind
  public async getEthereumRate() {
    const response = await this.request.get(`${this.url}/simple/price`, {
      params: { ids: 'ethereum', vs_currencies: 'usd' },
    });
    return response.data.ethereum.usd;
  }
}
export default CoinGescoApi;
