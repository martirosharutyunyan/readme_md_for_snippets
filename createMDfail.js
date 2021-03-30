const reactjs = require('./snippets/reactjs.json');
const functions_js = require('./snippets/functions-js.json');
const graphql = require('./snippets/graphql.json');
const nodejs = require('./snippets/nodejs.json');
const nodets = require('./snippets/nodets.json');
const scss = require('./snippets/scss.json');
const typescript_ts = require('./snippets/typescript-ts.json');
const simple_js = require('./snippets/simple-js.json');
// javascript



const numpy = require('./snippets/numpy.json');
const pandas = require('./snippets/pandas.json');
const pythonCode = require('./snippets/pythonCode.json');
const seaborn = require('./snippets/seaborn.json');
const sklearn = require('./snippets/sklearn.json');
const statsmodels = require('./snippets/statsmodels.json');
// python

const data = {
    ...typescript_ts,
    ...graphql,
    ...nodets,
    ...reactjs,
    ...functions_js,
    ...nodejs,
    ...scss,
    ...simple_js
}

// const data = {
//     ...pandas,
//     ...pythonCode,
//     ...seaborn,
//     ...sklearn,
//     ...numpy,
//     ...statsmodels
// }



const fs = require('fs');
let array = []
for (const property in data) {
    array = [...array,data[property]]
}
let str = ''
array.forEach(elem=>{
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


// console.log(str)



fs.writeFile('./files.txt',str,(err,data)=>{
    if(err) throw err
    console.log('saved')
})

