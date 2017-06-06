function findMax(array)
{
    var result = array[0];
    if (isNaN(result)) {
        return false;
    }
    var dlu = array.length;
    for (var i = 1; i<dlu;i++){
        if (isNaN(array[i])) {
            return false;
        }
        else{
            if (result < array[i]) {
                result = array[i];
            }
        }
    }
    return result;
}
module.exports = {
    findMax: findMax
};
