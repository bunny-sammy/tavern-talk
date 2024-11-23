const mongodb = require("@/lib/mongodb");
import Character from "@/models/Character";
import User from "@/models/User";

export default async function GET(req, res) {
  try {
    const { userId } = req.query;

    await mongodb.connect();
    const chars = await Character.find({ user: userId });
    res.status(200).json(chars);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}