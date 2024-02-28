// 导入readline模块，用于获取用户输入
const readline = require('readline');

// 创建readline接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 定义一个函数，用于生成指定位数的随机整数
function randomInt(digits) {
    // 计算最小值和最大值
    let min = Math.pow(10, digits - 1);
    let max = Math.pow(10, digits) - 1;
    // 返回随机整数
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 定义一个函数，用于生成指定位数和步数的加减法练习题
function generateQuestion(digits, steps) {
    // 初始化题目和答案
    let question = '';
    let answer = 0;
    let num;
    // 循环生成每一步的运算符和操作数
    for (let i = 0; i < steps; i++) {
        // 随机选择加法或减法
        let op = Math.random() < 0.5 ? '+' : '-';
        // 随机生成一个操作数
        num = randomInt(digits);
        // 根据运算符更新题目和答案
        if (op === '+') {
            question += `+ ${num} `;
            answer += num;
        } else {
            question += `- ${num} `;
            answer -= num;
        }
    }
    // 在题目前加上第一个操作数，并在末尾加上等号和问号
    question = `${question}= ?`;
    // 返回题目和答案

    return [question, answer];
}

// 定义一个函数，用于判断用户输入的答案是否正确，并输出统计结果
function checkAnswer(userAnswer, correctAnswer, startTime, endTime) {
    // 计算用时（秒）
    let duration = (endTime - startTime) / 1000;
    // 判断答案是否正确，并输出相应的信息
    if (userAnswer == correctAnswer) {
        console.log(`答对了,用了${duration}秒。`);
        console.log('')
        console.log('')


        // 更新正确次数和总用时
        correctCount++;
        totalDuration += duration;
        // 判断是否是最高用时，并更新
        if (duration > maxDuration) {
            maxDuration = duration;
            maxQuestion = currentQuestion;
            maxTime = endTime;
        }
    } else {
        console.log(`答错了,答案是${correctAnswer}。用了${duration}秒。`);
        console.log('')
        console.log('')

        // 更新错误次数和总用时
        wrongCount++;
        totalDuration += duration;
    }
}

// 定义一些全局变量，用于记录统计信息
let correctCount = 0; // 正确次数
let wrongCount = 0; // 错误次数
let totalDuration = 0; // 总用时（秒）
let maxDuration = 0; // 最高用时（秒）
let maxQuestion = ''; // 最高用时题目
let maxTime = null; // 最高用时时间

// 定义一些常量，用于控制题目的位数和步数
const DIGITS = 3; // 题目的位数
const STEPS = 4; // 题目的步数

// 输出欢迎信息和提示信息
console.log(`本程序将为您生成${DIGITS}位数的${STEPS}步加减法练习题。`);

// 定义一个变量，用于存储当前题目和答案
let [currentQuestion, currentAnswer] = generateQuestion(DIGITS, STEPS);
while (currentAnswer < 0) {
    [currentQuestion, currentAnswer] = generateQuestion(DIGITS,STEPS);
}
// 定义一个变量，用于存储当前题目的开始时间
let startTime = new Date();

// 输出当前题目
console.log(currentQuestion);

// 监听用户输入事件
rl.on('line', (input) => {
    // 如果用户输入q或Q，退出程序
    if (input === 'q' || input === 'Q') {
        // 关闭readline接口
        rl.close();
    } else {
        // 获取当前题目的结束时间
        let endTime = new Date();
        // 检查用户输入的答案是否正确，并输出统计结果
        checkAnswer(input, currentAnswer, startTime, endTime);
        // 生成新的题目和答案
        [currentQuestion, currentAnswer] = generateQuestion(DIGITS, STEPS);
        while (currentAnswer < 0) {
            [currentQuestion, currentAnswer] = generateQuestion(DIGITS,STEPS);
        }
        // 更新当前题目的开始时间
        startTime = new Date();
        // 输出新的题目
        console.log(currentQuestion);
    }
});

// 监听readline关闭事件
rl.on('close', () => {
    // 输出结束信息和统计信息
    console.log(`您一共做了${correctCount + wrongCount}道题，其中正确${correctCount}道，错误${wrongCount}道。`);
    console.log(`您的正确率是${(correctCount / (correctCount + wrongCount) * 100).toFixed(2)}%。`);
    console.log(`您的平均用时是${(totalDuration / (correctCount + wrongCount)).toFixed(2)}秒。`);
    console.log(`您的最高用时是${maxDuration.toFixed(2)}秒，题目是：${maxQuestion}`);
});
