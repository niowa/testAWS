const boss = require('./fork');

async function someJobHandler(job) {
  console.log('client ' + process.pid)
  console.log(`received ${job.name} ${job.id}`);
  console.log(`data: ${JSON.stringify(job.data)}`);
  await timeout();
  await job.done();
  console.log('jobs complete')
}

function timeout(argument) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve('ok')
    }, 3000);
  })
}

module.exports = {
    someJobHandler
};
