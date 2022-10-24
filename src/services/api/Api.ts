import CoinGescoApi from './CoinGescoApi';

class Api {
  public coinGescoApi: CoinGescoApi;

  public static instance: Api | null = null;

  public static getInstance(): Api {
    if (!Api.instance) {
      const instance = new Api();
      Api.instance = instance;
    }
    return Api.instance;
  }

  constructor() {
    this.coinGescoApi = new CoinGescoApi();
  }
}

export default Api;
