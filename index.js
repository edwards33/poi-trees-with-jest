const { createNode, createTree } = require('./tree')

const dom = createTree('html')
const head = dom.root.addChild('head')
const body = dom.root.addChild('body')
const title = head.addChild('title - Some Title')
const header = body.addChild('header')
const main = body.addChild('main')
const footer = body.addChild('footer')
const h1 = header.addChild('h1 - Trees')
const p = main.addChild('p - Trees!!!')
const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`)

console.log(dom.print())

document.getElementById("app").innerHTML = `
      <h1>Data Structures in JS using POI and Jest</h1>
      <h2>Trees Example</h2>
      <p> Open developer console </p>
    `
