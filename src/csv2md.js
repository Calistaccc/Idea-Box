const fs = require('fs');
const csv2md = require('csv-to-markdown-table');


const csvDatas = fs.readFileSync('../data/s.csv')


let r = csv2md(csvDatas.toString(), ",", true);

console.log(r)

r = `---
about: "该 main.md 用于记录每个人 Pull Requset 的内容。请参考已有的准确填写你自己的。有问题随时在 Issue 中发起讨论。"

---\n\n${r}`

fs.writeFileSync('./r.md', r)