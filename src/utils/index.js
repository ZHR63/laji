/**
 * @desc 手机号时自动添加空格
 */
export function phoneModel(phone) {
    var value = phone.replace(/\s/g, '').substring(0, 11);
    var len = value.length;
    if (len > 3 && len < 8) {
        value = value.substr(0, 3) + ' ' + value.substr(3)
    } else if (len >= 8) {
        value = value.substr(0, 3) + ' ' + value.substr(3, 4) + ' ' + value.substr(7)
    }
    return value
}

/**
 * @desc 时间格式化
 */
export function formatDateTime(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second = date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
}