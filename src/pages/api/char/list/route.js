const mongodb = require("@/lib/mongodb");
import Character from "@/models/character";

export default async function GET(req, res) {
  try {
    await mongodb.connect();
    const chars = await Character.find();
    res.status(200).json(chars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}