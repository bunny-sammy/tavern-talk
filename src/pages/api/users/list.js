const mongodb = require("/lib/mongodb");
import User from "/models/user";

export default async function GET(req, res) {
  try {
    await mongodb.connect();
    const users = await User.countDocuments();
    res.status(200).json({users_count: users});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}