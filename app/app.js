function findMin(array)
{
    if(array.length == 0)
        return false;
    var min = array[0];
    for(i = 0; i<array.length; i++){
        if(isNaN(array[i])){
            return false;
        }
        if(min>array[i]){
            min=array[i];
        }
    }
    return min;
}

module.exports = {
    findMin: findMin
};
