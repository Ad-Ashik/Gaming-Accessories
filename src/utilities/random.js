const add = function (length = 6) {
    return Math.random().toString(20).substr(2, length)
}
export default add;