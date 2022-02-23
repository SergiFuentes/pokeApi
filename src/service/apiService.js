import axios from "axios";
import apiServer from "./endpoints";

export async function getAllCards() {
  return axios.get(apiServer).then((res) => res.data);
}


export async function getUrl() {
    return axios.get(apiServer).then((res) => console.log(res.data.next)) &&
     axios.get(apiServer).then((res) => console.log(res.data.previous));
  }

