const mongodb = require("/lib/mongodb");
import Character from "/models/character";
import User from "/models/user";

export default async function GET(req, res) {
  try {
    const { userId } = req.query;
    var chars = [];

    await mongodb.connect();
    if (userId) {
      const user = await User.findById(userId);
      chars = await Character.find({ user });
    } else {
      chars = await Character.find();
    }
    res.status(200).json({chars});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}