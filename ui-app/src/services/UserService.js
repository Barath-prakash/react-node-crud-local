import axios from "axios";
export const API_HOST = "http://localhost:8080";

export async function getAllUsers() {
  try {
    const response = await axios.get(API_HOST + "/api/get-users"); // get or fetch
    return response.data;
  } catch (error) {
    return [];
  }
}

export function createUser(data) {
  return axios.post(`${API_HOST}/api/add-user`, { user: data }); // post - create
}

export function updateUser(user) {
  return axios.put(`${API_HOST}/api/update-user`, { user }); // put - update
}

export function deleteUser(userId) {
  return axios.delete(`${API_HOST}/api/delete-user/${userId}`); // delete- remove
}
