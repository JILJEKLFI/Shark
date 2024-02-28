// 需要配置的参数
let labelId = '1';
let folderName = '国家';
//以下参数无需配置
const axios = require('axios');
const PathUtil = require('path');
const VideoUtil = require('./videoUtil');
const ExerciseUtil = require('./exerciseUtil')
const fs = require('fs');
const rootPath = 'G:\\fenbidownload\\';
const retryCount = 6;
// 设置请求头部，携带 token
const headers = {
    'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22121834562%22%2C%22first_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%22188320a1a26824-09a5adfe117e06-26031a51-2359296-188320a1a27124e%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg4NjcxZmM5NzAxMzU2LTAwYTlhMTc3NTM4MWRjNzgtMjYwMzFhNTEtMjM1OTI5Ni0xODg2NzFmYzk3MTE1YzciLCIkaWRlbnRpdHlfbG9naW5faWQiOiIxMjE4MzQ1NjIifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22121834562%22%7D%7D; acw_tc=0b32972e17048532280203136ebeaff05f16bbc643bc643e413ad73ab08590; userid=129232020; sid=2293205; sess=smwbwvWX23NMh2LhUDpPnFw1IfP2PZlcKs28AokJYEM3FxxwfDXb1HKRzqoPlP7A0Q4ifQXG/g5V6bRcL2kRJpYFTcB8o8wwhSMiKLgU3i4=; persistent=DzBWB1hBkK4Kop22lPH0Axf1TlrYp6pBpO5b9Z6hpIJUk3YAi30Z7CB1nrVCj09qcGjOxRlNWP+8FD1nO08B2w==',
    'Content-Type': 'application/x-www-form-urlencoded' // 如果需要的话，根据 API 要求设置其他头部信息
};

async function download() {
    //获取练习列表
    if (!fs.existsSync(rootPath + folderName))
        fs.mkdirSync(rootPath + folderName);
    let exerciseList = await ExerciseUtil.getExerciseList(labelId);
    let exerciseRetry = 0;
    for (let p = 0; p < exerciseList.length; p++) {
        let item = exerciseList[p];
        //保存路径
        let path = rootPath + folderName + PathUtil.sep + item.name;
        console.log('正在下载试卷:' + item.name);
        try {
            // 检查文件夹是否存在，不存在则创建
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path);
            }
        } catch (err) {
            console.error('无法创建文件夹:', err);
        }
        //获取习题列表
        let exerciseRes = await ExerciseUtil.createExercise(item.id);
        if (exerciseRes === -2 && exerciseRetry < retryCount) {
            console.log('创建练习失败,重试');
            exerciseRetry++;
            p--;
            continue;
        }
        exerciseRetry = 0;
        exerciseRes = exerciseRes.data;
        let questionList = exerciseRes['sheet']['questionIds'];
        let errCount = 0;
        let questionCount = 0;
        let retry = 0;
        for (let m = 0; m < questionList.length; m++) {
            let questionId = questionList[m];
            questionCount = m + 1;
            //判断是否已经下载
            let destinationPath = path + PathUtil.sep + '第' + questionCount + '题' + '.mp4';
            if (fs.existsSync(destinationPath)) {
                // console.log(questionId + '已下载，自动跳过');
                continue;
            }
            //下载解析视频
            let result = await VideoUtil.downloadVideo(questionId, destinationPath)
            if (result === -1) {
                errCount++;
                if (errCount === 20) {
                    console.log(item.name + '     无讲解，自动跳过');
                    break;
                }
            } else if (result === -2) {
                //重试
                if (retry < retryCount) {
                    console.log(`重试ID:${questionId}`);
                    m--;
                    retry++;
                } else {
                    console.log(`第${questionCount}题下载失败`);
                }
            } else {
                // console.log(questionId + '视频下载成功');
            }
            await VideoUtil.sleep(2500);
            retry = 0;
        }
        //删除练习
        try {
            await ExerciseUtil.deleteExercise(exerciseRes['id']);
        } catch (e) {
            console.log('练习删除失败，跳过');
        }
        await VideoUtil.sleep(3000000);
    }
}

async function main() {
    for (let k = 1; k <= 30; k++) {
        labelId = k.toString();
        folderName = labelId;
        await download();
    }
}

main().then(res => {
});
// axios.get(apiUrl, {headers})
//     .then(async response => {
//
//
//         let videoUrl = response.data['datas'][0].url;
//         await videoJs.downloadVideo(videoUrl, `G:/fenbidownload/${id}.mp4`);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

