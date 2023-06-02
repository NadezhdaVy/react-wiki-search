/* eslint-disable no-mixed-spaces-and-tabs */
import axios from 'axios';
import { TResponse } from '../TStypes/types';

const wikiApi = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
});

export const getWikiSearchResults = async (searchTerm: string): Promise<TResponse> => {
  const response = await wikiApi.request({
    params: {
      action: 'query',
      generator: 'search',
      gsrsearch: searchTerm,
      gsrlimit: 20,
      prop: 'pageimages|extracts',
      exchars: 100,
      exintro: true,
      explaintext: true,
      exlimit: 'max',
      format: 'json',
      origin: '*',
    },
  });

  return response.data;
};
