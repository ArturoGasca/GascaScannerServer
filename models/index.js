var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");

const database = process.env.DATABASE_NAME
const pricesDatabase = process.env.PRICES_DATABASE_NAME
console.log(process.env.HOST)

const dbName = database,
      username = process.env.DB_USER,
      password = process.env.PASSWORD,
      host = process.env.HOST,
      port = process.env.DB_PORT

//Connect to the databses with Sequelize
const conStringPost = 'postgres://'+username+':'+password+'@'+host+':'+port+'/'+dbName
const sequelize = new Sequelize(conStringPost)

//The JSON which will contain every model of the database
var db = {};

//Read all the model files in the directory
fs
  .readdirSync(__dirname)
  .forEach(function(file) {
	if (file !== 'index.js' && file !== 'PriceHolder.js'){
		var model = sequelize.import(path.join(__dirname, file))
		var modelName = model.modelName || model.name
		//Store every model in the exported JSON
		db[modelName] = model;
	}
  });
  
  Object.keys(db).forEach(function(modelName) {
	  if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	  }
  })

//Store some other useful properties like the sequelize connection and the Sequelize module
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
