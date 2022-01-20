import axios from 'axios'
import { meliBaseURL } from './constants'

/**
 * @file http.ts
 * @description Creates instance http for request to MeLi API
 */
export const http = axios.create({ baseURL: meliBaseURL })