// Sync vs Async



// const { readFileSync, writeFileSync } = require('fs')
// console.log("Start")

// const first = readFileSync('./content/subfolder/first.txt', 'utf8')
// const second = readFileSync('./content/subfolder/second.txt', 'utf8')

// writeFileSync('./content/result-sync.txt',
//  `Here is the result : ${first}, ${second}`,
//   {flag: 'a'}
// )

// console.log("Done with this task")
// console.log("Starting the next one")

// Async

const { readFile, writeFile } = require('fs')

console.log("Start")

readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;

        writeFile('./content/result-async.txt',
            `here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("Done with this task")
            })
    })
})

console.log("Starting the next one")