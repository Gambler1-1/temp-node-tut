const os = require ('os')

//info about currnt user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currntOS = {
   name : os.type(),
   release : os.release(),
   totalmem : os.totalmem(),
   freeMem : os.freemem(),
}
console.log(currntOS)