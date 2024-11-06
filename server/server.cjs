
const { MongoClient, ServerApiVersion } = require('mongodb');
// const url = "mongodb+srv://master:iiOAmvGpV179Ijsz@taverntalkdb.ziqhd.mongodb.net/?retryWrites=true&w=majority&appName=TavernTalkDB";
const url = "mongodb+srv://master:iiOAmvGpV179Ijsz@taverntalkdb.ziqhd.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  connectTimeoutMS: 10000,  // Sets the timeout to 30 seconds
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);