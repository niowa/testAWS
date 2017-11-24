var app = require('express')();
var http = require('http').Server(app);
var moment = require('moment');
const args = [];
args.push('zsb');
var childProcess = require('child_process').fork('./fork', args);

// var childProcess = require('child_process').fork('./creators', args);

// console.log(childProcess)
// var Agenda = require('agenda');
// var MongoClient = require('mongodb');

// const boss = new PgBoss('postgres://niowa:leska7480311@aa94pgc5cglkpm.cxghg3astuwi.us-west-2.rds.amazonaws.com:5432/ebdb');


// PG-BOSS

//// PG-BOSS
console.log('server: ' + process.pid);

cchildProcess.send('start');

childProcess.on('message', function (msg) {
  console.log('SERVER');
  console.log(msg);
});


app.get('/', function(req, res) {
    res.status(200).sendfile('index.html');
});

app.get('/create', function (req, res) {
  childProcess.send('create');
});

app.get('/del', function (req, res) {
  childProcess.kill();
  // childProcessWorker.kill();
  console.log('ko');
  res.send('DEL');
})

app.get('/test', function (req, res) {
  console.log(process);
     res.status(200).send(process.version)
})

app.get('/error', function(req, res) {
  res.status(200).send('error');
});

app.get('/simple', function(req, res) {
    var b = "hello"
    async function a() {
      a = 'KEK'
    }
    a();
    res.status(200).send('Get request ' + b);
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