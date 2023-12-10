
//info bput the current user
const os = require('os');

// Get system uptime in seconds
const uptimeInSeconds = os.uptime();

// Convert seconds to a more human-readable format
const uptimeInHours = uptimeInSeconds / 3600;

const OS=
{
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(OS);
