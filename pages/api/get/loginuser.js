import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
    // 로그인한 회원 정보 불러오기
    // 서버 컴포넌트는 인수가 3개(req, res, authOptions)
    let session = await getServerSession(req, res, authOptions);
    if (session !== null) {
        const userEmail = session.user.email;

        // GET 요청 시 실행
        if (req.method === "GET") {
            try {
                // 로그인한 유저한 동일한 email의 정보를 가져오기
                const db = (await connectDB).db("forum");
                let result = await db
                    .collection("user_cred")
                    .findOne({ email: userEmail });

                // 성공 시 결과 전달
                return res.status(200).json(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                return res.status(500).json({ error: "Internal server error" });
            }
        } else {
            // 요청 메소드가 다를 때 에러 메시지 전송
            return res.status(405).json({ error: "Method not allowed" });
        }
    }else{
        return res.status(401).json({ error: "Unauthorized" });
    }
}
