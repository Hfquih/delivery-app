import axios from "axios";
import 'dotenv/config'

export default function ApiClient(){
   const client = axios.create({baseURL: import.meta.env.VITE_API_URL , withCredentials: true});

   return client
}