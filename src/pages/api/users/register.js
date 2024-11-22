const mongodb = require("@/lib/mongodb");
import User from "@/models/user";
import { useRouter } from 'next/router';
import bcrypt from "bcryptjs";

export default async function POST(req, res) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await mongodb.connect();
    await User.create({ name, email, password: hashedPassword });

    // res.status(200).json({ message: "Usuário registrado" });

    const router = useRouter();

    useEffect(() => {
      // Redirect to another route
      router.push('/');
    }, [router]);
  } catch (error) {
    res.status(500).json({ error });
  }
}