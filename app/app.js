function findMax(array)
{
    var max = array[0];
    var lenght = array.length;

    for(var i = 0; i < lenght; i++){
      if(isNaN(array[i])){
          return false;
      }
      else if(array[i]>max){
          max = array[i];
      }
    }
    return max;
}
module.exports = {
    findMax: findMax
};
