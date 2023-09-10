import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    try {
        // POST 요청 시 실행
        if (req.method === "POST") {
            const email = req.body;

            const db = (await connectDB).db("forum"); // connectDB()를 호출하여 DB 연결을 얻습니다.
            const result = await db
                .collection("user_cred")
                .find()
                .toArray(); // find 결과를 배열로 변환하여 가져옵니다.

            let emailInUse = false;

            result.map((item, idx) => {
                if (item.email === email) {
                    emailInUse = true;
                }
            });

            if (emailInUse) {
                res.status(500).json("이미 사용중인 이메일입니다.");
            } else {
                res.status(200).json("사용가능한 이메일입니다.");
            }
        }
    } catch (error) {
        // 오류 처리
        console.error("오류 발생:", error);
        res.status(500).json({ error: "서버 오류가 발생했습니다." });
    }
}
