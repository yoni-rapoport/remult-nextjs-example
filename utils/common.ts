import axios from "axios";
import { Remult } from "remult";

axios.defaults.baseURL = "/";

export const remult = new Remult(axios); 
