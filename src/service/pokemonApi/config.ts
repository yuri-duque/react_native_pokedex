import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: process.env.POKEDEX_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

export const pokemonApi = axios.create(config);