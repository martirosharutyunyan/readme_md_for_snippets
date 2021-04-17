const fs = require('fs');

const promisify1arg = (action) => {
    return async (fileName) => {
        return new Promise((res, rej) => {
            action(fileName, (err, data) => {
                if (err) {
                    return rej(err);
                };
                res(data);
            })
        });
    }
};

const promisify2arg = action => {
    return async (fileName, data) => {
        return new Promise((res, rej) => {
            action(fileName, data, (err, data) => {
                if (err) {
                    return rej(err);
                };
                res(data);
            })
        });
    }
};


exports.readFile = promisify1arg(fs.readFile)
exports.readDir = promisify1arg(fs.readdir)
exports.writeFile = promisify2arg(fs.writeFile)