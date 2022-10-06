const fs = require('fs')

if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

process.chdir("Logs");
for(let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`
    fs.writeFile(fileName, 'some text', (err) => {
        if (err) {
            throw err;
        }
    });
    console.log(fileName);
}