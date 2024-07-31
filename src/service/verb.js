import axiosClient from "./instance";

export async function getRequest(URL, params) {
    // console.log('url', URL);
    //console.log('params:', params);
    const response = axiosClient.get(`${URL}`, { params: params });
    console.log(response)
    return response;
}