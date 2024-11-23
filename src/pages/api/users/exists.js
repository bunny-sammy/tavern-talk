const mongodb = require("@/lib/mongodb");
import User from "@/models/User";

export default async function POST(req, res) {
    try {
        const { email } = req.body;
        await mongodb.connect();
        const user = await User.findOne({ email }).select("_id");
        console.log("user: ", user);
        res.status(200).json({ user, message: "Usuário encontrado" });
    } catch (error) {
        res.status(201).json({ message: "Nenhum usuário encontrado" });
    }
}