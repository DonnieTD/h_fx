// ES5
var h_fx = (function () {
    // Each
    function each(list, callback) {
        if (list instanceof Array) {
            for (i = 0; i < list.length; i++) {
                callback(list[i], i, list)
            }
        } else if (typeof (list) === "object") {
            for (var prop in list) {
                if (list.hasOwnProperty(prop)) {
                    callback(list[prop], prop, list)
                }
            }
        } else {
            throw "h_fx_TypeError: Value passed wasn't an array or an object";
        }
    }
    // endEach

    // Filter
    function filter(list, test) {
        var returnVal = [];
        h_fx.each(list, function (element, index, list) {
            if (test(element, index, list) === true) {
                returnVal.push(element);
            }
        });
        return returnVal;
    }
    // endFilter

    // map
    function map(list, transformation) {
        var returnVal = [];
        each(list, function (element, index, list) {
            var transformedElement = transformation(element, index, list);
            returnVal.push(transformedElement);
        });
        return returnVal;
    }
    // endMap

    return {
        each: each,
        filter: filter,
        map: map
    }
})();