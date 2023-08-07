import axios from 'axios';
import CryptoJS from 'crypto-js';
import { config } from '../util/config'

function makeRequest(endpoint: string, params: any = {}) {
  const timestamp = Date.now();
  const hash = CryptoJS.MD5(`${timestamp}${config.apiKeys.marvel.privateKey}${config.apiKeys.marvel.publicKey}`).toString();
  const url = `https://gateway.marvel.com${endpoint}`;

  const defaultParams = {
    ts: timestamp,
    apikey: config.apiKeys.marvel.publicKey,
    hash: hash,
  };

  return axios.get(url, { params: { ...defaultParams, ...params } });
}

export { makeRequest };
