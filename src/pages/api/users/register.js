const mongodb = require("@/lib/mongodb");
import User from "@/models/user";
import bcrypt from "bcryptjs";

export default async function POST(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await mongodb.connect();
    await User.create({ name, email, password: hashedPassword });

    res.status(200).json({ message: "Usuário registrado" });
  } catch (error) {
    res.status(500).json({ error });
  }
}