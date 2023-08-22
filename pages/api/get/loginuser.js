import { connectDB } from "@/util/database";

import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { getServerSession } from "next-auth"

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    let userEmail = session.user.email

    if (req.method == "GET") {
        const client = await connectDB;
        const db = client.db("forum");
        let result = await db.collection("user_cred").findOne({email:userEmail})
        return res.status(200).json(result);
    }
}
