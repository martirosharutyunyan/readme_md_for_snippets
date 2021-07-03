const path = require('path');
const fs = require('fs').promises

exports.createFiles = (data, langauge) => {
    // let array = []
    // for (const property in data) {
    //     array = [...array, data[property]]
    // }
    let ReadmeMd = {
        py:`
# python-snippets

Python for Data sciense and ML(DL)


## Usage

keywords



**Enjoy!**
Keywords for easy working
\`\`\`
        `,
        js:`
# js snippets

Javascript, SCSS, Reactjs, Typescript + Reactjs, Nodejs snippets 


## Usage

keywords



**Enjoy!**
Keywords for easy working
\`\`\`
        `
    }
    let str = '';
    data.forEach(elem => {
        const length = elem.prefix.length
        let spaces = '';
        for (let i = 0; i < length + 5 ; i++) {
            spaces += ' '
        }
        const body = elem.body
        let body2 = ''
        for (let i = 0; i < body.length; i++) {
            if(i === 0){
                body2 += body[0] +'\n'
                continue
            }
            body2 += spaces + body[i] + '\n' 
        }
        const data = `${elem.prefix} =>  ${body2}`
        str += '\n\n' + data
    })
    return `${ReadmeMd[langauge]}\n${str}\n\`\`\``;
};