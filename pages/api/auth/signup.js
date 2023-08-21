import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;

      console.log("🚀 ~ file: signup.js:11 ~ handler ~ req.body:", req.body)
      let db = (await connectDB).db('forum');
      await db.collection('user_cred').insertOne(req.body);
      res.redirect(302, "/");
  }
}; 