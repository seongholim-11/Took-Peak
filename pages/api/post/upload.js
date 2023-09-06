import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import * as dayjs from 'dayjs'

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            let session = await getServerSession(req, res, authOptions);
            console.log("🚀 ~ file: upload.js:9 ~ handler ~ session:", session);

            dayjs.locale("ko");
            const currentDate = dayjs().format('YYYY/MM/DD HH:mm:ss'); // dayjs를 사용하여 현재 시간을 포맷팅합니다.
            console.log("🚀 ~ file: upload.js:14 ~ handler ~ currentDate:", currentDate)
            /* const currentDate = new Date(); // 현재 시간 정보 생성
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
                .padStart(2, "0")}`; */

            if (session !== null) {
                const body = JSON.parse(req.body);

                let db = (await connectDB).db("forum");
                if (body.image) {
                    await db.collection("post").insertOne({
                        title: body.title,
                        content: body.content,
                        board: body.board,
                        image: body.image,
                        author: session.user.name,
                        createdAt: currentDate,
                        view: body.view,
                    });
                } else {
                    await db.collection("post").insertOne({
                        title: body.title,
                        content: body.content,
                        board: body.board,
                        author: session.user.name,
                        createdAt: currentDate,
                        view: body.view,
                    });
                }
                res.status(200).json("글이 업로드 되었습니다.");
            } else {
                res.status(401).json("로그인 후에 글 작성이 가능합니다.");
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json("서버 오류가 발생했습니다.");
        }
    } else {
        res.status(405).json("허용되지 않은 메소드입니다.");
    }
}
