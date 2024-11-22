const mongodb = require("@/lib/mongodb");
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export default async function GET(req, res) {
  try {
    await mongodb.connect();
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}