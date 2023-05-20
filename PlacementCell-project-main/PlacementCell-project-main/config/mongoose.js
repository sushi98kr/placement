const mongoose = require('mongoose');

const db = main().catch(err => console.log(err));

async function main() {
  //await mongoose.connect('mongodb://127.0.0.1/placementcell');
  console.log("Successfully connected to MongoDB");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = db;
// const mongoose = require('mongoose');

// // mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.zygzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

// mongoose.connect('mongodb://127.0.0.1:27017/PlacementCell');

// const db = mongoose.connection;

// db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

// db.once('open',function(){
//     console.log("Connected to Database :: MongoDB")
// });

// module.exports = db;