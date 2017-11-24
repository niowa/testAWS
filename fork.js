// const someJobHandler = require('./workers').someJobHandler;
const PgBoss = require('pg-boss');
const boss = new PgBoss('postgres://niowa:leska7480311@aa94pgc5cglkpm.cxghg3astuwi.us-west-2.rds.amazonaws.com:5432/ebdb');

process.on('message', function (msg) {
    console.log(msg)
    switch(msg) {
        case 'start':
        console.log('caseStart')
            startBoss();
            break;
        case 'create':
        console.log('caseCreate')
            job();
            break;

        default:
            break;
    }
})

function test() {
    console.log('ZNS')
    return;
}

function startBoss(argument) {
    console.log('startBoss')
    boss.on('error', onError);
    console.log(subscribe)
    boss.start()
      .then(subscribe)
      .catch(onError);
}

async function subscribe() {
    console.log('subscribe ' + process.pid);
    await boss.subscribe('some-job', someJobHandler);
    console.log('subscribed to some-job');
}
    
function onError(error) {
    console.error(error);
}

async function someJobHandler(job) {
  console.log('client ' + process.pid)
  console.log(`received ${job.name} ${job.id}`);
  console.log(`data: ${JSON.stringify(job.data)}`);
  await timeout();
  await job.done();
  console.log(process.pid)
  console.log('jobs complete')
}

function timeout(argument) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve('ok')
    }, 3000);
  })
}

async function job() {
    console.log('job ' + process.pid);
  const jobId = await boss.publish('some-job', {param1: 'parameter1'}, {expireIn: "5 minutes", retryLimit: 9999});
  console.log(`created some-job ${jobId}`);
}

// console.log(boss)
// module.exports = boss;
