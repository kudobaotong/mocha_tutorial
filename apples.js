var A = {};                    // create an Object named A
A.boxOrSingle = [100, 1];
A.getCalculation = function (startInv, sold) {    // function

    'use strict';
    var endInv = [];
    var remaining = startInv - sold;

    for (var i = 0; i<2;i++){
        var item = A.boxOrSingle[i];

            var times = Math.floor(remaining/item);
            endInv[i] = times;
            remaining = remaining - item*times;
        
    }

    return endInv;
};
module.exports = A;            // export the module with a single method