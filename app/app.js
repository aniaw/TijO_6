function findMin(array)
{
    var min = array[0];
    var lenght = array.length;

    for (var i = 0; i < lenght; i++) {
        if (isNaN(array[i])) {
            return false;
        }
        else if(array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

module.exports = {
    findMin: findMin
};
