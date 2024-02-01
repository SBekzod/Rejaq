const instanceCPUs = require("os").cpus();
const cluster = require("cluster");

if (cluster.isMaster) {
  console.log(`MASTER thread process id => ${process.pid}`);
  instanceCPUs.map(() => {
    cluster.fork();
  });
} else {
  console.log(`WORKER thread process id => ${process.pid}`);
}
