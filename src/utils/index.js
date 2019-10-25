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