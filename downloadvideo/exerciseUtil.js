const axios = require('axios');
const videoJs = require("./videoUtil");
const exerciseInfo = {
    type: 1,
    paperId: 222386,
    exerciseTimeMode: 2
};
// 设置请求头部，携带 token
const delHeaders = {
    'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22121834562%22%2C%22first_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg4NjcxZmM5NzAxMzU2LTAwYTlhMTc3NTM4MWRjNzgtMjYwMzFhNTEtMjM1OTI5Ni0xODg2NzFmYzk3MTE1YzciLCIkaWRlbnRpdHlfbG9naW5faWQiOiIxMjE4MzQ1NjIifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22121834562%22%7D%7D; acw_tc=0b32972e17048532280203136ebeaff05f16bbc643bc643e413ad73ab08590; userid=129232020; sid=2293205; sess=smwbwvWX23NMh2LhUDpPnFw1IfP2PZlcKs28AokJYEM3FxxwfDXb1HKRzqoPlP7A0Q4ifQXG/g5V6bRcL2kRJpYFTcB8o8wwhSMiKLgU3i4=; persistent=DzBWB1hBkK4Kop22lPH0Axf1TlrYp6pBpO5b9Z6hpIJUk3YAi30Z7CB1nrVCj09qcGjOxRlNWP+8FD1nO08B2w==',
    'Content-Type': 'application/json' // 如果需要的话，根据 API 要求设置其他头部信息
};
const headers = {
    'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22121834562%22%2C%22first_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg4NjcxZmM5NzAxMzU2LTAwYTlhMTc3NTM4MWRjNzgtMjYwMzFhNTEtMjM1OTI5Ni0xODg2NzFmYzk3MTE1YzciLCIkaWRlbnRpdHlfbG9naW5faWQiOiIxMjE4MzQ1NjIifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22121834562%22%7D%7D; acw_tc=0b32972e17048532280203136ebeaff05f16bbc643bc643e413ad73ab08590; userid=129232020; sid=2293205; sess=smwbwvWX23NMh2LhUDpPnFw1IfP2PZlcKs28AokJYEM3FxxwfDXb1HKRzqoPlP7A0Q4ifQXG/g5V6bRcL2kRJpYFTcB8o8wwhSMiKLgU3i4=; persistent=DzBWB1hBkK4Kop22lPH0Axf1TlrYp6pBpO5b9Z6hpIJUk3YAi30Z7CB1nrVCj09qcGjOxRlNWP+8FD1nO08B2w==',
    'Content-Type': 'application/x-www-form-urlencoded' // 如果需要的话，根据 API 要求设置其他头部信息
};

async function getExerciseList(labelId) {
    const apiUrl = `https://tiku.fenbi.com/api/xingce/papers/?toPage=0&pageSize=150&labelId=${labelId}&app=web&kav=100&av=100&hav=100&version=3.0.0.0`; // 替换为你的 API 地址

    let res = await axios.get(apiUrl, {headers}).catch(error => {
        console.error('Error:', error);
    });
    return res.data.list;
}

async function createExercise(paperId) {
    const exerciseInfo = {
        type: 1,
        paperId: paperId,
        exerciseTimeMode: 2
    };
    const apiUrl = `https://tiku.fenbi.com/api/xingce/exercises?app=web&kav=100&av=100&hav=100&version=3.0.0.0`; // 替换为你的 API 地址
    let res = await axios.post(apiUrl, exerciseInfo, {headers}).catch(error => {
        console.error('Error:', error);
        return -2;
    });
    return res;
}

async function deleteExercise(exerciseId) {
    const apiUrl = `https://tiku.fenbi.com/api/xingce/exercises/del?app=web&kav=100&av=100&hav=100&version=3.0.0.0`; // 替换为你的 API 地址
    let res = await axios.post(apiUrl, [exerciseId], {headers: delHeaders}).catch(error => {
        console.error('Error:', error);
    });
    if (res.data.code === 1) {
        console.log('练习删除成功：' + exerciseId);
    }
    return res;
}

module.exports = {getExerciseList, createExercise, deleteExercise}