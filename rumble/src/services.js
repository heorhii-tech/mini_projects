const API = `https://api.github.com/users/`;

const service = {
    get: (username) => fetch(API + `${username}`).then(data => data.json()),
    getRepos: (reposAPI) => fetch(reposAPI + '?per_page=100').then(data => data.json())

}
export default service;