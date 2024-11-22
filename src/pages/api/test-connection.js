import { connect, close } from "@/lib/mongodb"

export default async function handler(req, res) {
  const connection = await connect();
  if (connection.success) {
    const db = connection.db;
    const collections = await db.listCollections().toArray();
    res.status(200).json({ success: true, collections });
  } else {
    res.status(500).json({ success: false, error: error.message });
  }
  await close();
}