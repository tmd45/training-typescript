var promise = function (x) {
    return new Promise(function (resolve, reject) {
        if (x >= 0) {
            resolve(x + " is positive number");
        }
        else {
            reject(x + " is negative number");
        }
    });
};
promise.then(function (value) {
    return "finished!";
});
