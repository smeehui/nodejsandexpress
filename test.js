const arr = [1, 2, 3, 1, 7, 7, 8, 9, 10, 10, 11];

const findUnique = (array) => {
    const result = [];
    const loop = (start, end, cb) => {
        if (start < end) {
            cb(start);
            return loop(start + 1, end, cb);
        }
        return;
    };

    loop(0, array.length, (i) => {
        if (array.indexOf(array[i]) === i) {
            result.push(array[i]);
        }
    });
    return result;
};
console.log(findUnique(arr));
