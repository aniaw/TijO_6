function findMax(array)
{
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        if (typeof(array[i]) != 'number') {
            return false;
        }
    }

    var max = array[0];
    for(var i = 0; i < arrayLength; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
module.exports = {
    findMax: findMax
};