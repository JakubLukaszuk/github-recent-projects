import request from '../../api/agent';

export const getReposAsync = async(UserNameOrID, IsDesc=true, from, to) => {
    const sortDirection = IsDesc ? 'desc': 'asc';
    const data = request
        .get(`/user/${UserNameOrID}/repos?sort=created&direction=${sortDirection}?page=${from}&per_page=${to}`)
        .catch(error => {
            throw error;
        })
    return data;
}

export const getCommitsAsync = async(repositoryID, IsDesc=true, from, to) => {
    const sortDirection = IsDesc ? 'desc': 'asc';
    const data = request
        .get(`https://api.github.com/repositories/${repositoryID}/commits?sort=created&direction=${sortDirection}?page=${from}&per_page=${to}`)
        .catch(error => {
            throw error;
        })
    return data;
}