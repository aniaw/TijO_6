function findMin(array)
{
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        if (typeof(array[i]) != 'number') {
            return false;
        }
    }

    var min = array[0];
    for(var i = 0; i < arrayLength; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
module.exports = {
    findMin: findMin
};
