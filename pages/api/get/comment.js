import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    const parent = req.query.parent; // req.query.parent를 통해 쿼리 스트링의 'parent' 값을 가져옵니다.

    // GET 요청 시 실행
    if (req.method === "GET") {
        try {
            // 로그인한 유저한 동일한 email의 정보를 가져오기
            const db = (await connectDB).db("forum"); // connectDB()를 호출하여 DB 연결을 얻습니다.
            const result = await db
                .collection("comments")
                .find({ parent })
                .toArray(); // find 결과를 배열로 변환하여 가져옵니다.

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
}
