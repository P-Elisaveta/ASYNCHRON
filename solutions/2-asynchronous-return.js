import fs from 'fs';

// BEGIN
const write = (Path, data, callback) => {
    fs.writeFileSync(Path, data);
    callback();
}

export default write;
// END