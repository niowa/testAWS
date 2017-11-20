var app = require('express')();
var http = require('http').Server(app);
var moment = require('moment');

// var Agenda = require('agenda');
// var MongoClient = require('mongodb');

// const PgBoss = require('pg-boss');
// const boss = new PgBoss('postgres://niowa:leska7480311@localhost/wallet_api');
// var redis = require("redis"),
//     client = redis.createClient();
// var kue = require('kue')
//   , queue = kue.createQueue();
 
// client.select(3, function() { /* ... */ }); 

// var a = 1;
// setTimeout(() => {
//     console.log('a = 5')
//   a = 5;
// }, 5000)

//// AGENDA

// var agenda = new Agenda();
// agenda.database('localhost:27017/agenda-test', 'agendaJobs');
 
// agenda.on('ready', function() {
//   agenda.schedule('in 1 seconds', 'task');
//   console.log('LOL')
//   // agenda.every('3 minutes', 'delete old users');
 
//   // Alternatively, you could also do:

//   console.log('start')
//   agenda.start();
// });

// agenda.on('ready', function () {
//     // var weeklyReport = agenda.create('task')
//     // weeklyReport.repeatEvery('3 seconds').save();
//     agenda.every('3 seconds', 'task');
//     agenda.start();
// })

// agenda.define('task', function(job, done) {
//   console.log('norm')
//   console.log(job)
//   if (a == 5) {
//     console.log('ok')
//     done();
//   } else {
//     // done(new Error())
//     return new Error();
//   }
// });

//// AGENDA

//// PG-BOSS
// boss.on('error', onError);

// boss.start()
//   .then(ready)
//   .catch(onError);


// function ready() {
//   boss.publish('some-job', {param1: 'parameter1'}, {expireIn: "2 second", retryLimit: 1})
//     .then(jobId => console.log(`created some-job ${jobId}`))
//     .catch(onError);

//   boss.subscribe('some-job', someJobHandler)
//     .then(() => console.log('subscribed to some-job'))
//     .catch(onError);
// }

// function someJobHandler(job) {
//   console.log(`received ${job.name} ${job.id}`);
//   console.log(`data: ${JSON.stringify(job.data)}`);
//   console.log(boss);
//    // if (a != 5) {
//    //      job.done(new Error('kek'))
//    //        .then(() => {
//    //          console.log(`some-job ${job.id} fail`)
//    //        })
//    //        .catch(onError);
//    //    }
//   job.done()
//     .then(() => {
//       console.log(`some-job ${job.id} completed`)
//     })
//     .catch(onError);
// }

// function onError(error) {
//   console.error(error);
// }
//// PG-BOSS

//// KUE.JS
// var job = queue.create('email', {
//     title: 'Account renewal required'
//   , to: 'tj@learnboost.com'
//   , template: 'renewal-email'
// }).priority('high')
//   .attempts(5).backoff( {delay: 2000, type:'fixed'} )
//   .save();

// var queue = kue.createQueue();

// queue.process('email', 10, function(job, done) {
//     console.log(job.id)
//     console.log('try')
//     email(job.data, done);
// });

// function email(address, done) {
//   if(a !== 5) {
//     //done('invalid to address') is possible but discouraged 
//     return done(new Error('invalid to address'));
//   }
//   // email send stuff... 
//   console.log('END')
//   done();
// }
// ////KUE.JS

// client.on("error", function (err) {
//     console.log("Error " + err);
// });
 
// client.set("string key", "string val", redis.print);
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// client.hkeys("hash key", function (err, replies) {
//     console.log(replies.length + " replies:");
//     replies.forEach(function (reply, i) {
//         console.log("    " + i + ": " + reply);
//     });
//     client.quit();
// });

app.get('/', function(req, res) {
    res.status(200).sendfile('index.html');
});

app.get('/test', function (req, res) {
     res.status(200).send(process.version)
})

app.get('/error', function(req, res) {
  res.status(200).send('error');
});

app.get('/simple', function(req, res) {
    res.status(200).send('Get request');
})

app.get('/exception', function (req, res) {
    // try {
    //   doSomething();
    // } catch (e) {
    //     console.log('ERROR')
    //     rollbar.error(e, req);
    //     rollbar.warning(e, req);
    // }
  res.status(200).send('Get request to the homepage');
});

// app.use(rollbar.errorHandler());

http.listen(4000, function(){
    console.log('listening on *:4000');
});


// var Rollbar = require('rollbar');

// var rollbar = new Rollbar({
//     accessToken: '63cbdf0a11174e58b7adde562fbdf9f7',
//     captureUncaught: true,
//     captureUnhandledRejections: true,
// });

// rollbar.configure({
//     logLevel: 'info', //default: debug
//     reportLevel: 'debug', //warning
//     payload: {
//         person: { //or use req.user_id = "user_id" in request
//             id: 456,
//             username: 'foo',
//             email: 'foo@example.com'
//         }
//     }
// });
// // record a generic message and send it to Rollbar

// rollbar.log("Server start!");