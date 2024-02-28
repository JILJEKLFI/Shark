const axios = require('axios');
const exerciseInfo = {
    type: 1,
    paperId: 222386,
    exerciseTimeMode: 2
};
const apiUrl = `https://tiku.fenbi.com/api/xingce/exercises?app=web&kav=100&av=100&hav=100&version=3.0.0.0`; // 替换为你的 API 地址

// 设置请求头部，携带 token
const headers = {
    'Cookie': 'sid=2488291; persistent=8C3k/P17/FiRnzepi9+eVON4phWS2QlU1YTBlhluWOJdExssYf5pWf+Jwsa2AVeCbpyJMGtB3ONkgLNUVGKONw==; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22121834562%22%2C%22first_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg4NjcxZmM5NzAxMzU2LTAwYTlhMTc3NTM4MWRjNzgtMjYwMzFhNTEtMjM1OTI5Ni0xODg2NzFmYzk3MTE1YzciLCIkaWRlbnRpdHlfbG9naW5faWQiOiIxMjE4MzQ1NjIifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22121834562%22%7D%7D; acw_tc=0a099d2e16889926259527418e50e7a0ef471bf5cc7dc7863043a75086a9f5; userid=121834562; sess=Z733pU2nO9++USIuafmPQLZnFQ/07EZKfndcBDYzn1F2jeXIkCIXTbEXuwK62keLgki3SF0DIis06wSRycsiX7K5DMQ2hexfJNpnD6mPcVY=',
    'Content-Type': 'application/x-www-form-urlencoded' // 如果需要的话，根据 API 要求设置其他头部信息
};

// 发送 GET 请求
// axios.get(apiUrl, {headers})
//     .then(response => {
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// 或者发送 POST 请求

axios.post(apiUrl, exerciseInfo, {headers})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
