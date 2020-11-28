import request from '../../api/agent';

const getSortStringDirection = (IsDesc) => {
    return(IsDesc ? 'desc': 'asc');
}

export const getReposAsync = async(UserNameOrID, from, to, IsDesc=true) => {
    const data = request
        .get(`/user/${UserNameOrID}/repos?sort=created&direction=${getSortStringDirection(IsDesc)}?page=${from}&per_page=${to}`)
        .catch(error => {
            throw error;
        })
    return data;
}

export const getCommitsAsync = async(repositoryID, from, to, IsDesc=true) => {
    const data = request
        .get(`https://api.github.com/repositories/${repositoryID}/commits?sort=created&direction=${getSortStringDirection(IsDesc)}?page=${from}&per_page=${to}`)
        .catch(error => {
            throw error;
        })
    return data;
}
