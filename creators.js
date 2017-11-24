const boss = require('./fork');

async function job(res, req) {
    console.log(boss)
  const jobId = await boss.publish('some-job', {param1: 'parameter1'}, {expireIn: "5 minutes", retryLimit: 9999});
  console.log(`created some-job ${jobId}`);
  req.status(200).send('JOB CREATE');
}

module.exports = {
    job
};
