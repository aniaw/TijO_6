function findMax(array)
{
    var i =0;
    var nan = false;
    var max = array[0];
    for(i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
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
        return max;
    }
}
module.exports = {
    findMax: findMax
};
