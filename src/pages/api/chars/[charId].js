const mongodb = require("@/lib/mongodb");
import Character from "@/models/Character";

export default async function GET(req, res) {
  try {
    const { charId } = req.query;

    await mongodb.connect();
    const char = await Character.findById(charId);
    res.status(200).json(char);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}