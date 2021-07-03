require('dotenv').config()
const fs = require('fs').promises
const { createFiles } = require('./createReadme')

const create = async (langauge, url) => {
    const files = await fs.readdir(`${url}/snippets`)
    const data = await Promise.all(files.map(async filename => {
        const json = await fs.readFile(`${url}/snippets/${filename}`)
        return Object.values(JSON.parse(json.toString()))
    }))
    const json = []
    data.forEach(e => e.forEach(e => json.push(e)))
    const file = createFiles(json, langauge)
    fs.writeFile(`${url}/README.md`, file)
}

create('py', process.env.URLTOPY)
create('js', process.env.URLTOJS)

