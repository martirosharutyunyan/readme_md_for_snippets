require('dotenv').config()
const { readDir, readFile, writeFile } = require('./promisify')
const path = require('path');
const { creatFiles } = require('./createReadme')

const getData = async (langauge, url) => {
    const files = await readDir(url)
    files.forEach(async elem => {
        const array = elem.split('.')
        const data = await readFile(`${url}/${elem}`)
        writeFile(path.join(__dirname, `./${langauge}-snippets/${array[0]}.json`), data)
    })
}
// getData('py', `${process.env.URLTOPY}/snippets`)
// getData('js', `${process.env.URLTOJS}/snippets`)

const getAllData = async (langauge) => {
    let data = {}
    const res = await readDir(path.join(__dirname, `./${langauge}-snippets`))
    for (let i = 0; i < res.length; i++) {
        // if(i === 2) break;
        const json = require(`./${langauge}-snippets/${res[i]}`)
        data = {...data, ...json}
    };
    creatFiles(data, langauge)
};
getAllData('js')
getAllData('py')

const saveToFolders = async language => {
    const data = await readFile(path.join(__dirname, `${language}.txt`))
    if(language === 'py'){
        return writeFile(`${process.env.URLTOPY}/README.md`, data);
    }
    writeFile(`${process.env.URLTOJS}/README.md`, data);    
};
// saveToFolders('js')
saveToFolders('py')



