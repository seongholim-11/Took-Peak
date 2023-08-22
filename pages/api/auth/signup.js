import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    // POST 요청 시 실행
    if (req.method === "POST") {
        // 비밀번호를 암호화
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;

        // 이미지 url만을 변수에 저장
        req.body.avatar = req.body.avatar[1];

        // 회원정보를 db에 저장
        let db = (await connectDB).db("forum");
        await db.collection("user_cred").insertOne(req.body);
        res.redirect(302, "/");
    }
}
