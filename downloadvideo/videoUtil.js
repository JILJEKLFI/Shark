const axios = require('axios');
const fs = require('fs');
const path = require('path');
// 设置请求头部，携带 token
const headers = {
    'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22121834562%22%2C%22first_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg4NjcxZmM5NzAxMzU2LTAwYTlhMTc3NTM4MWRjNzgtMjYwMzFhNTEtMjM1OTI5Ni0xODg2NzFmYzk3MTE1YzciLCIkaWRlbnRpdHlfbG9naW5faWQiOiIxMjE4MzQ1NjIifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22121834562%22%7D%7D; acw_tc=0b32972e17048532280203136ebeaff05f16bbc643bc643e413ad73ab08590; userid=129232020; sid=2293205; sess=smwbwvWX23NMh2LhUDpPnFw1IfP2PZlcKs28AokJYEM3FxxwfDXb1HKRzqoPlP7A0Q4ifQXG/g5V6bRcL2kRJpYFTcB8o8wwhSMiKLgU3i4=; persistent=DzBWB1hBkK4Kop22lPH0Axf1TlrYp6pBpO5b9Z6hpIJUk3YAi30Z7CB1nrVCj09qcGjOxRlNWP+8FD1nO08B2w==',
    'Content-Type': 'application/x-www-form-urlencoded' // 如果需要的话，根据 API 要求设置其他头部信息
};

async function downloadVideo(questionId, destinationPath) {
    let detailId;
    let detailUrl = `https://ke.fenbi.com/api/gwy/v3/episodes/tiku_episodes_with_multi_type?tiku_ids=${questionId}&tiku_prefix=xingce&tiku_type=5&app=web&kav=100&av=100&hav=100&version=3.0.0.0`
    try {
        let urlRes;
        urlRes = await axios.get(detailUrl, {headers}).catch(error => {
            return -2;
        });
        if (urlRes === -2) {
            return -2;
        }
        detailId = urlRes.data.data[questionId][0].id;
        let apiUrl = `https://ke.fenbi.com/api/gwy/v3/episodes/${detailId}/mediafile/meta?content_id=0&biz_type=100&app=web&kav=100&av=100&hav=100&version=3.0.0.0`; // 替换为你的 API 地址
        urlRes = await axios.get(apiUrl, {headers}).catch(error => {
            //网络请求出错，重试
            return -2;
        });
        if (urlRes === -2) {
            return -2;
        }
        let length = urlRes.data['datas'].length;
        if (length === 0) {
            return -1;
        }
        let videoUrl = urlRes.data['datas'][length-1].url;
        const response = await axios({
            method: 'GET',
            url: videoUrl,
            responseType: 'stream',
        });
        // 创建可写流并将视频数据写入到本地文件
        const writer = fs.createWriteStream(destinationPath);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => resolve(destinationPath));
            writer.on('error', reject);
        });
    } catch (error) {
        return (-1);
    }
}

function checkAndRemoveFolder(folderName) {
    // 检查文件夹是否存在
    if (fs.existsSync(folderName)) {
        // 如果存在则删除文件夹
        try {
            fs.rmdirSync(folderName, {recursive: true});
            console.log(`文件夹 ${folderName} 已存在并已删除`);
        } catch (err) {
            console.error('无法删除文件夹:', err);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {downloadVideo, checkAndRemoveFolder, sleep};
