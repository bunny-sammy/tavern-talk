const mongodb = require("/lib/mongodb");
import User from "/models/user";

export default async function GET(req, res) {
    try {
        const { userId } = req.query;
        await mongodb.connect();
        const user = await User.findById(userId).select("_id name email");
        console.log("user: ", user);
        res.status(200).json({ user, message: "Usuário encontrado" });
    } catch (error) {
        res.status(201).json({ message: "Nenhum usuário encontrado" });
    }
}