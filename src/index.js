
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    return matrix.reduce((ac, item, index) => index % 2 ? ac.concat(item.reverse()) : ac.concat(item), []);
}
