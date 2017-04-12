function findMin(array)
{
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        if (typeof(array[i]) != 'number') {
            return false;
        }
    }
    return true;
}
module.exports = {
    findMin: findMin
};
