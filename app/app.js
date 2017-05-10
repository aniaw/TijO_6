function findMin(array)
{
    var i =0;
    var nan = false;
    var min = array[0];
    for(i=0;i<array.length;i++){
        if(array[i]<min){
            min=array[i];
            nan = false;
        }
    }
    for(i=0;i<array.length;i++){
        if(isNaN(array[i])){
            nan = true;
        }

    }
    if(nan){
        return NaN;
    }else{
        return min;
    }
}
module.exports = {
    findMin: findMin
};
