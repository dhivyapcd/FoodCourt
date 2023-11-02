import axios from 'axios'
const baseURL = 'http://localhost:3000';
/**
 * Author:Dhivya.C
 * Description:Get Method
 * @param {*} url -string
 * @param {*} options -parameters
 * @returns 
 */
const getData = (url, options = {}) => axios.get(`${baseURL}${url}`, options)
/**
 * Post Method
 * @param {*} url -string
 * @param {*} postObj -object
 * @param {*} options -parameters
 * @returns 
 */
const postData = (url, postObj, options = {})=>
{
    return axios.post(`${baseURL}${url}`, postObj, options)
}
/**
 * Put Method
 * @param {*} url -string
 * @param {*} postObj -object
 * @param {*} options -parameters
 * @returns 
 */
const putData = (url, postObj, options = {})=>
{
    return axios.put(`${baseURL}${url}`, postObj, options)
}
/**
 * Delete Method
 * @param {*} url -string
 * @param {*} options -parameters
 * @returns 
 */
const deleteData = (url, options)=>
{
    return axios.delete(`${baseURL}${url}`, options)
}
/**
 * Patch Method
 * @param {*} url 
 * @param {*} obj 
 * @param {*} options 
 * @returns 
 */
const patchData = (url, obj, options = {})=>
{
    return axios.patch(`${baseURL}${url}`, obj, options)
}

export { getData, putData, postData, deleteData, patchData }