function findMax(array)
{
    if(array.length === 0) {
        return false;
    }
    var max = array[0];
    for(var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return false;
        }
        if(max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
module.exports = {
    findMax: findMax
};
