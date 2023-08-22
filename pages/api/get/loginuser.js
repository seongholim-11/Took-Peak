import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions);
    if (session !== null) {
        const userEmail = session.user.email;

        if (req.method === "GET") {
            try {
                const db = (await connectDB).db("forum");
                let result = await db
                    .collection("user_cred")
                    .findOne({ email: userEmail });

                return res.status(200).json(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                return res.status(500).json({ error: "Internal server error" });
            }
        } else {
            return res.status(405).json({ error: "Method not allowed" });
        }
    }
}
