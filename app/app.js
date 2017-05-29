function findMin(array)
{
    if(!Array.isArray(array) || array.length==0)
        return false;
    var min=array[0], i=0;
    while (array.length > i){
        if (isNaN(array[i]))
            return false;
        i++;
        if(array[i]<min)
            min = array[i];
    }
    return min;
}
module.exports = {
    findMin: findMin
};
