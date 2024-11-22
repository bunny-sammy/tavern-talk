// pages/api/testConnection.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Set your MongoDB connection string in .env.local
const options = {};

export default async function handler(req, res) {
  let client;

  try {
    // Connect to MongoDB
    client = new MongoClient(uri, options);
    await client.connect();

    // Test operation: List collections
    const db = client.db(); // If using a specific database, specify it here
    const collections = await db.listCollections().toArray();

    res.status(200).json({ success: true, collections });
  } catch (error) {
    console.error("Connection failed:", error);
    res.status(500).json({ success: false, error: error.message });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
