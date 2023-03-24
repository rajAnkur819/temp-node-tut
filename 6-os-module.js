/*
Build-in modules

1. OS
2. Path
3. FS
4. HTTP

While importing these build-in modules, we don't need to enter the entire path

*/
const os = require('os') 

// info about current user
const user = os.userInfo()
console.log(user)

// Method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS)