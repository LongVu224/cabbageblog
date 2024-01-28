require('dotenv').config();

const config = {};

config.awsId = process.env.AWS_ID || "";
config.awsSecret = process.env.AWS_SECRET || "";
config.storageKey = process.env.STORAGE_KEY || "";
config.storageName = process.env.STORAGE_NAME || "";
config.dbConnection = process.env.DB_CONNECTION || "";

module.exports = config;