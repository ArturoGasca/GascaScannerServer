var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");

const database = process.env.DATABASE_NAME
const pricesDatabase = process.env.PRICES_DATABASE_NAME

const dbName = database,
      pricesDbName = pricesDatabase,
      username = process.env.DB_USER,
      password = process.env.PASSWORD,
      host = process.env.HOST,
      port = process.env.DB_PORT

//Connect to the databses with Sequelize
const conStringPost = 'postgres://'+username+':'+password+'@'+host+':'+port+'/'+dbName
const pricesConStringPost = 'postgres://'+username+':'+password+'@'+host+':'+port+'/'+pricesDbName
const sequelize = new Sequelize(conStringPost)
const pricesSequelize = new Sequelize(pricesConStringPost)

//The JSON which will contain every model of the database
var db = {};

//Read all the model files in the directory
fs
  .readdirSync(__dirname+'/Prices')
  .forEach(function(file) {
    var model = pricesSequelize.import(path.join(__dirname+'/Prices', file))
    var modelName = model.modelName || model.name
    //Store every model in the exported JSON
    db[modelName] = model;
  });

fs
  .readdirSync(__dirname+'/Products')
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname+'/Products', file))
    var modelName = model.modelName || model.name
    //Store every model in the exported JSON
    db[modelName] = model;
  });

//Store some other useful properties like the sequelize connection and the Sequelize module
db.sequelize = sequelize;
db.pricesSequelize = pricesSequelize
db.Sequelize = Sequelize;

module.exports = db;
