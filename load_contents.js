const fs = require('fs');
const path = process.argv[2];

async function getFileContents(path) {
    return new Promise(async (resolve, reject) => {
        if (fs.existsSync(path)) {
            console.log('exists');

            try {
                const stats = fs.statSync(path)
                if (stats) {
                    console.log(stats);
                    if (stats.size > 0) {
                        try {
                            const buffer = fs.readFileSync(path)
                            resolve(buffer)
                        } catch (err) {
                            reject('Error trying to get stats')
                        }
                    }
                    reject('File exists but there is no content')
                }   
            } catch (error) {
                reject('Error trying to get stats')
            }
        }
        reject('File does not exist')
    })
}


try {
    await getFileContents(path);
    console.info('File was found and the contents were loaded');
} catch (err) {
    console.error(`There was an error getting contents for ${path}`, err);
}