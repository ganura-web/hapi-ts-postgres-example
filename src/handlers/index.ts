/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'fs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allHandlers: any = {};

function requireFile(file: string) {
    allHandlers[file.split('.js')[0]] = require(`./${file}`).default;
}

fs.readdirSync(__dirname)
    .filter((file: string) => file.match(/(js)$/) && file !== __filename)
    .forEach((file: string) => {
        requireFile(file);
    });

export default allHandlers;
