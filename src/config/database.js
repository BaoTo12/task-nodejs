const mongoose = require('mongoose');

var dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];

const connectionTest = async () => {
    mongoose.set("strictQuery", false)
    await mongoose.connect('mongodb://127.0.0.1:27017', {
        maxPoolSize: 10,
        socketTimeoutMS: 6000,
        keepAlive: true,
        keepAliveInitialDelay: 30000,
        dbName: "nosql"
    });
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
}


module.exports = connectionTest;