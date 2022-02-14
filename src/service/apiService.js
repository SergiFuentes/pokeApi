export async function getAllCards() {
    return axios.get(apiServer+"/products").then((res) => res.data);
  }