function findMin(array)
{
    var min = array[0];

    for(var i = 0; i < array.length; i++){
        if(typeof array[i] != 'number'){
            return false;
        }
        else{
            if(array[i] < min){
                min = array[i];
            }
        }
    }

    return min;
}
module.exports = {
    findMin: findMin
};
