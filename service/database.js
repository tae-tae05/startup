const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

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
    // Hash the password before we insert it into the database
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
    const project = projectCollection.findOne({id: current_id});
    return project;
}

// async function updateName(old_name, new_name){
//     return projectCollection.updateOne( {name: old_name}, {$name: new_name});
// }

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addProject,
    getProjects,
    findProject
    // updateName
};