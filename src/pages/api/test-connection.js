const mongodb = require("/lib/mongodb");

export default async function handler(req, res) {
  try {
    await mongodb.connect();

    const collections = await mongodb.data.db.listCollections().toArray();

    res.status(200).json({ success: true, collections: collections.map((col) => col.name) });
  } catch (error) {
    console.error("Connection failed:", error);
    res.status(500).json({ success: false, error: error.message });
  } finally {

  }
}
