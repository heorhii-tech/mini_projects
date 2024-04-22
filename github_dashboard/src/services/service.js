const API_LANG = `https://api.github.com/repos/microsoft/vscode/languages`
const API_REPOS = `https://api.github.com/search/repositories?q=stars:>1000+language:LANGUAGE&sort=stars&order=desc&type=Repositories`
const API_REPO_INFO = `https://api.github.com/repositories`;
const API = `https://api.github.com/users/`;
export const service = {
    getLangs: () => fetch(API_LANG).then(data => data.json()),
    getRepos: (lang) => fetch(API_REPOS.replace('LANGUAGE', lang)).then(data => data.json()),
    getRepoInfo: (id) => fetch(API_REPO_INFO + `/${id}`).then(data => data.json()),
    getUserInfo: (username) => fetch(API + `${username}`).then(data => data.json()),
    getRepo: (reposAPI) => fetch(reposAPI + '?per_page=100').then(data => data.json())
}