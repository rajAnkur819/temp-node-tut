// npm -> Global command, comes with node
// npm --version

//local dependency -> use it only for this particular project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (Mac)

//package.json -> manifest file (Stores importanat info abut project/package )
// Dependecies are inside this json file

// 1. manual approach (create package.json in the root, create properties etc)
// 2. npm init (step by step, presee enter to skip)
// 3. npm init -y (everything default)

const  _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems =  _.flattenDeep(items)
console.log(newItems)
