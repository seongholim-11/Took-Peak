import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            let session = await getServerSession(req, res, authOptions);

            const currentDate = new Date(); // 현재 시간 정보 생성
            const formattedDate = `${currentDate.getFullYear()}-${(
                currentDate.getMonth() + 1
            )
                .toString()
                .padStart(2, "0")}-${currentDate
                .getDate()
                .toString()
                .padStart(2, "0")} ${currentDate
                .getHours()
                .toString()
                .padStart(2, "0")}:${currentDate
                .getMinutes()
                .toString()
                .padStart(2, "0")}:${currentDate
                .getSeconds()
                .toString()
                .padStart(2, "0")}`;

            if (req.method === "POST") {
                if (session !== null) {
                    const body = JSON.parse(req.body);

                    if (body.comment.trim() === "") {
                        res.status(400).json("댓글 내용을 작성해주세요.");
                        return;
                    }

                    let db = (await connectDB).db("forum");
                    await db.collection("boardComments").insertOne({
                        comment: body.comment,
                        parent: body._id,
                        author: session.user.name,
                        createdAt: formattedDate,
                        title: body.title,
                        email: session.user.email,
                    });
                    res.status(200).json("저장완료");
                } else {
                    res.status(401).json("로그인 후에 댓글 작성이 가능합니다.");
                }
            } else {
                res.status(405).json("허용되지 않은 메소드입니다.");
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json("서버 오류가 발생했습니다.");
        }
    }
}
