function findMax(array)
{
    var max = array[0];

    for(var i = 0; i < array.length; i++){
        if (typeof array[i] !=  "number"){
            return false;
        }
        else {
        if(array[i] > max){
        max = array[i];}
        }
    }


    return max;

}
module.exports = {
    findMax: findMax
};
