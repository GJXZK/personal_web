// 格式化时间
export function formatDate(date: Date, fmt: string): string {
  // 1.获取年份
  // y+ 1个或者多个y  yyyy:2021
  // y* 0个或者多个y
  // y? 0个或者1个y
  const yearMatch = fmt.match(/(y+)/);
  if (yearMatch) {
    const yearToken = yearMatch[0];
    fmt = fmt.replace(yearToken, String(date.getFullYear()).slice(4 - yearToken.length));
  }

  // 2.获取月日等
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };

  for (const k in o) {
    const tokenMatch = fmt.match(new RegExp(`(${k})`));
    if (tokenMatch) {
      const token = tokenMatch[0];
      const str = String(o[k as keyof typeof o]); // 显式类型断言
      fmt = fmt.replace(token, token.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

// 辅助函数，补齐左侧零位
function padLeftZero(str: string): string {
  return ('00' + str).slice(-2);
}


// 处理大于1w的数字
export function handleNum(num: number) {
  let numString = ""
  if (num > 10000) {
    let numString = (num / 10000).toFixed(1);
    return numString + '万';
  } else {
    return numString;
  }
}

// 处理音乐时长的时间
export function handleMusicTime(time: number): string {
  let timeValue = time
  if (timeValue > 10000) {
    timeValue = Math.floor(timeValue / 1000);
  } else {
    timeValue = Math.floor(timeValue);
  }

  let m = Math.floor(timeValue / 60).toString();
  let s = Math.floor(timeValue % 60).toString();
  m = m.length === 1 ? '0' + m : m;
  s = s.length === 1 ? '0' + s : s;

  return m + ':' + s;
}

// 将播放时长还原为秒数
export function returnSecond(time: string) {
  let timeArray = time.split(':');
  let m = parseInt(timeArray[0]);
  let s = parseInt(timeArray[1]);
  return m * 60 + s;
}

// 生成当前时间戳
export function getTimeStamp() {
  return Date.now();
}
