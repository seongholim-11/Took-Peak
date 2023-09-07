import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    console.log("req.body: " + req.body);

    try {
        // POST 요청 시 실행
        if (req.method === "POST") {
            // 비밀번호를 암호화
            const data = JSON.parse(req.body)
            const hash = await bcrypt.hash(data.password, 10);
            data.password = hash;

            // 회원정보를 DB에 저장
            const db = (await connectDB).db("forum");
            await db.collection("user_cred").insertOne(data);
            
            // 성공적으로 회원 정보를 저장한 경우 홈페이지로 리디렉션
            res.status(200).json('회원가입 완료')
        }
    } catch (error) {
        // 오류 처리
        console.error("오류 발생:", error);
        res.status(500).json({ error: "서버 오류가 발생했습니다." });
    }
}
