const mongodb = require("@/lib/mongodb");
import User from "@/models/user";
import { signIn } from "next-auth/react";
import bcrypt from "bcryptjs";

export default async function POST(req, res) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email }).select("_id email password");
    const passwordsMatch = await bcrypt.compare(password, user.password);
 
    if (!passwordsMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    res.status(200).json({ success: true, user: user._id })
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' })
  }
}