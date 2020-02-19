exports.min = function min(array) {
    if (array != undefined && array.length != 0) {
        var minimal = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] < minimal) minimal = array[i];
        }
        return minimal;
    }
    return 0;
}

exports.max = function max(array) {
    if (array != undefined && array.length != 0) {
        var maximal = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] > maximal) maximal = array[i];
        }
        return maximal;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (array != undefined && array.length != 0) {
        var count = 0;
        var qty = array.length;
        for (var i = 0; i < array.length; i++) {
            count += array[i];
        }
        return count / qty;
    }
    return 0;
}
