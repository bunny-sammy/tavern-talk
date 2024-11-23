const mongodb = require("/lib/mongodb");
import User from "/models/user";
import Character from "/models/character";

export default async function POST(req, res) {
  try {
    const properties = req.body;
    properties.user = await User.findById(properties.user);

    console.log(properties);
    await mongodb.connect();
    await Character.create(properties);

    res.status(200).json({ message: "Usuário registrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}