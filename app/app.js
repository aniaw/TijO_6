function findMax(array) {

    if (array.length == 0)
        return false

    if (!isNaN(array[0]))
        tmp = array[0]
    else
        return false

    for(i = 1; i < array.length; i++)
        if (!isNaN(array[i])) {
            if (tmp < array[i])
                tmp = array[i]
        } else
            return false

    return tmp

}
module.exports = {
    findMax: findMax
};
