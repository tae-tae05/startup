const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });

const db = client.db('jin');
const userCollection = db.collection('user');
const projectCollection = db.collection('project');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    return user;
}

function getUser(email) {
    return userCollection.findOne({ email: email });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addProject(project) {
    return projectCollection.insertOne(project);
  }

async function getProjects(){
    const projects = projectCollection.find({});
    return projects.toArray();
}

async function findProject(current_id){
    const num = parseInt(current_id, 10);
    const project = projectCollection.findOne({ num: num });
    return project;
}

async function increment(current_id, counter){
    const num = parseInt(current_id, 10);
    const index = parseInt(counter, 10);
    switch (index) {
        case 1:
            projectCollection.updateOne(
                { num: num },
                { $inc: {counter1: +1}});
        break;
        case 2:
            projectCollection.updateOne(
                { num: num },
                { $inc: {counter2: +1}});
        break;
        case 3:
            projectCollection.updateOne(
                { num: num },
                { $inc: {counter3: +1}});
        break;
        default:
        break;
    }
}

async function decrease(current_id, counter){
    const num = parseInt(current_id, 10);
    const index = parseInt(counter, 10);
    switch (index) {
        case 1:
            projectCollection.updateOne(
                { num: num },
                { $inc: {counter1: -1}});
        break;
        case 2:
            projectCollection.updateOne(
                { num: num },
                { $inc: {counter2: -1}});
        break;
        case 3:
            projectCollection.updateOne(
                { num: num },
                { $inc: {counter3: -1}});
        break;
        default:
        break;
    }
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addProject,
    getProjects,
    findProject,
    increment,
    decrease  
};