const mongodb = require("@/lib/mongodb");
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export default async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await mongodb.connect();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "Usuário registrado com sucesso!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Um erro ocorreu ao registrar o usuário." },
      { status: 500 }
    );
  }
}