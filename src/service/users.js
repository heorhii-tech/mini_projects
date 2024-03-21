const API = `https://reqres.in/api/users`;
const service = {
    get: () => fetch(API).then(data => data.json())
}
export default service;