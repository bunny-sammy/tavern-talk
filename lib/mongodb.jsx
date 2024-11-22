const { MongoClient } = require("mongodb");

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = { appName: "devrel.template.nextjs" };

let client = new MongoClient(uri, options);

const connect = async () => {
  try {
    await client.connect();
    console.log(" ✓ Connected to MongoDB");
    const db = client.db("sample_mflix");
    return {success: true, db};
  } catch (error) {
    console.error("Connection failed:", error);
    return {success: false, error: error};
  }
}

const close = async () => {
  if (client) {
    await client.close();
  }
}

module.exports = {
  client, connect, close
};