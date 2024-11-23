const mongodb = require("@/lib/mongodb");
import User from "@/models/User";
import Character from "@/models/Character";

export default async function POST(req, res) {
  try {
    const properties = req.body;
    properties.user = await User.findOne({ email }).select("_id");
  
    console.log(properties);

    await mongodb.connect();
    await Character.create(properties);

    res.status(200).json({ message: "Usuário registrado" });
  } catch (error) {
    res.status(500).json({ error });
  }
}