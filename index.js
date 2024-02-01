const instanceCPUs = require("os").cpus();
const cluster = require("cluster");

if (cluster.isMaster) {
  console.log(`MASTER thread: ${process.pid}`);
  instanceCPUs.map(() => {
    cluster.fork();
  });
} else {
  console.log(`WORKER thread: ${process.pid}`);
}


