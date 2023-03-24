const {readFileSync, writeFileSync} = require('fs');

// The above code is same as the below one

// const fs = require('fs');
// fs.readFileSync

const first = readFileSync('./content/subfolder/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

// console.log(first,second);

writeFileSync('./content/result-sync.txt', 
`Here is the result : ${first}, ${second}` 
)

